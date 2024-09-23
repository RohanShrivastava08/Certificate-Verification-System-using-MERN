const multer = require('multer');
const path = require('path');
const Admin = require('../models/Admin');
const Student = require('../models/Student');
const XLSX = require('xlsx');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    const filetypes = /xlsx|xls/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Excel files only!');
  },
}).single('file');

// Login admin function
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Upload file function
const uploadFile = (req, res) => {
  // Ensure the admin is authenticated
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    // Proceed with file upload
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }

      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
      }

      try {
        const workbook = XLSX.readFile(req.file.path);
        const sheetNameList = workbook.SheetNames;
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
        
        for (const record of data) {
          const student = new Student({
            certificateID: record.certificateID,
            studentName: record.studentName,
            internshipDomain: record.internshipDomain,
            startDate: record.startDate,
            endDate: record.endDate,
          });
          await student.save();
        }
        res.status(200).json({ message: 'File uploaded and data processed successfully.' });
      } catch (error) {
        res.status(500).json({ message: 'Error processing file.' });
      }
    });
  });
};

module.exports = {
  loginAdmin,
  uploadFile,
};