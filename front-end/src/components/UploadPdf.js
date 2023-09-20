import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function UploadPdf() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileSelected(true);
  };

  const navigateToPDFViewer = () => {
    if (selectedFile) {
      // Navigate to PDFViewerTest with the selected file
      navigate("/pdf-viewer", { state: { file: selectedFile } });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end', // Align the button to the right
        justifyContent: 'flex-end', // Align the button to the bottom
        position: 'relative', // Position relative to the parent div
      }}
    >
      {!fileSelected && (
        <label className="btn btn-outline-success" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          Choose a PDF file
          <input
            type="file"
            style={{ display: 'none' }}
            accept=".pdf"
            onChange={handleFileChange}
          />
        </label>
      )}
      {selectedFile && (
        <button className="btn btn-primary" onClick={navigateToPDFViewer}>
          View PDF
        </button>
      )}
    </div>
  );
}

export default UploadPdf;
