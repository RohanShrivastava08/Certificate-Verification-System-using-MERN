# 📄 Certificate Verification System using MERN Stack

![Student](https://github.com/user-attachments/assets/13511525-d14a-45f4-b7c2-d228bbb9e945)

- Welcome to the Certificate Verification System project!
- This is a full-stack web application developed using the MERN Stack (MongoDB, Express, React, Node.js).
- It allows institutions to issue certificates and users to verify and download them with ease, offering a professional and efficient system for certificate management.

![About](https://github.com/user-attachments/assets/d7ae7ac1-276d-4d4a-8dcf-4c7999ae3d1a)

![Admin](https://github.com/user-attachments/assets/e171f13c-ae95-4909-aa31-d458ac43f188)

![Contact](https://github.com/user-attachments/assets/f9fb3211-c24a-4cfe-bfe7-d927a7954ae2)



## 📋 Table of Contents
- Introduction
- Features
- File Structure
- Technology Stack
- Installation
- Usage
- Screenshots
- Contributing
- License
- Contact

## 📘 Introduction
- The Certificate Verification System is designed to simplify the process of issuing, verifying, and managing certificates.
- This project provides an end-to-end solution that handles certificate creation, secure storage, and quick verification using certificate IDs and QR codes.
- Built using modern web technologies, the system offers a responsive and user-friendly interface, coupled with a scalable backend for large data handling.

## ✨ Features
📜 Certificate Verification: Users can search and verify certificates using a unique Certificate ID.

🔒 Admin Dashboard: Secure login for administrators to upload certificate data in bulk and manage issued certificates.

📈 Real-time Statistics: Admins can view insights and stats about the number of verifications.

📄 Downloadable Certificates: Verified certificates can be downloaded in a professional PDF format, complete with designs, signatures, and QR codes.

📱 Responsive Design: Fully optimized for desktops, tablets, and smartphones, ensuring a smooth experience across all devices.

## 📁 File Structure

```bash
certificate-verification-system/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── StudentPortal.js
│   │   └── CertificateDetail.js
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── app.js
│   └── package.json
├── README.md
```

## 💻 Technology Stack

### Frontend:
- React.js: For building the user interface and managing front-end logic.
- CSS: For styling and enhancing the look of the system.

### Backend:
- Node.js: Handles server-side logic.
- Express.js: For setting up APIs and handling HTTP requests.
- MongoDB: Database for storing certificate information.
- Mongoose: For interacting with MongoDB in an elegant way.

### Others:
- JWT: Secure authentication for the admin dashboard.
- PDFKit: To generate and download certificates in PDF format.
- QRCodeCanvas: To generate QR codes that link to certificate verification.

## 🛠 Installation

Follow these steps to set up and run the Certificate Verification System on your local machine:

- Clone the repository:

```bash
git clone https://github.com/your-username/certificate-verification-system.git
cd certificate-verification-system
```

- Install dependencies:

For the client (React frontend):

```bash
cd client
npm install
```

For the server (Node backend):

```bash
cd server
npm install
```

Run the project:

For the client (React frontend):

```bash
npm start
```

For the server (Node backend):

```bash
npm run dev
```

## 🚀 Usage
- Admin users can log in using the secure admin portal.
- After login, the admin can upload Excel files containing certificate data or view statistics.
- Users can search for their certificates using the Certificate ID in the Student Portal.
- Verified certificates can be viewed and downloaded as a PDF, including a QR code for verification.


## 📸 Screenshots

![About](https://github.com/user-attachments/assets/d7ae7ac1-276d-4d4a-8dcf-4c7999ae3d1a)

![Admin](https://github.com/user-attachments/assets/e171f13c-ae95-4909-aa31-d458ac43f188)

![Certificate](https://github.com/user-attachments/assets/a8be378a-9110-4ed7-b504-a2e11ecf3fc3)

![Contact](https://github.com/user-attachments/assets/f9fb3211-c24a-4cfe-bfe7-d927a7954ae2)

![Dashboard](https://github.com/user-attachments/assets/b22128f6-ac22-42a3-8401-bb2c7764647a)

![Home](https://github.com/user-attachments/assets/c0e1c03a-c6e2-4db2-bfb0-67f54af9f015)

![Screenshot (430)](https://github.com/user-attachments/assets/7984aadb-8812-45e5-9261-b923647e7992)

![Screenshot (434)](https://github.com/user-attachments/assets/08d4c50d-7c04-4791-8477-6b4f690d465c)

![Screenshot (436)](https://github.com/user-attachments/assets/09bbeb99-de2e-46ba-bc49-9e27b4bb1393)

![Screenshot (437)](https://github.com/user-attachments/assets/fa003222-13de-4d93-8de2-44a7b666442a)

![Screenshot (439)](https://github.com/user-attachments/assets/b3948d0e-84ae-4b07-af6e-d12fca33863d)

![Screenshot (440)](https://github.com/user-attachments/assets/53c7d25a-4530-4282-af19-b59df87ad43a)

![Screenshot (441)](https://github.com/user-attachments/assets/c5a7ffd2-f63b-4f7b-8d07-d17f6122bf48)

![Screenshot (442)](https://github.com/user-attachments/assets/0b5e38a6-380f-400f-bd42-facd1bf73d74)

![Screenshot (443)](https://github.com/user-attachments/assets/5a068bdb-97f5-45be-8bb4-0acb0791ed6a)

![Screenshot (444)](https://github.com/user-attachments/assets/7eaee1ef-d535-4906-be3b-f75e769b2b4c)

![Screenshot (445)](https://github.com/user-attachments/assets/0eccc983-4411-4b5e-8453-6f224884efa2)

![Student](https://github.com/user-attachments/assets/13511525-d14a-45f4-b7c2-d228bbb9e945)



## 🤝 Contributing

We welcome contributions from the community!

If you have suggestions for improvements or new features, feel free to fork the repository and create a pull request.

- Steps to contribute:
Fork the repository.

- Create a new branch:
```bash
git checkout -b feature/YourFeature
```

- Commit your changes:

```bash
git commit -m 'Add your feature'
```

- Push to the branch:
```bash
git push origin feature/YourFeature
```

- Open a pull request with a detailed description of your changes.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: rohansh0808@gmail.com

- GitHub: Rohansh0808
