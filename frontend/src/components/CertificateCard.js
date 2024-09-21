import React from 'react';
import './CertificateCard.css'; // Add styling for the card

const CertificateCard = ({ certificate, onOpen }) => {
  return (
    <div className="certificate-card">
      <h3>Certificate Details</h3>
      <p><strong>ID:</strong> {certificate.certificateID}</p>
      <p><strong>Name:</strong> {certificate.studentName}</p>
      <button onClick={() => onOpen(certificate)}>Open</button>
    </div>
  );
};

export default CertificateCard;
