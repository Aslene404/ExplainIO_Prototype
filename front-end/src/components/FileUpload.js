import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import 'bootstrap/dist/css/bootstrap.min.css';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false); // New state variable

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileSelected(true); // Set the fileSelected state to true when a file is selected

  };

  return (
    <div style={{ width: '100%'}}>
    {!fileSelected && (
        <label className="btn btn-primary">
          Choose a PDF file
          <input
            type="file"
            style={{ display: 'none' }}
            accept=".pdf"
            onChange={handleFileChange}
          />
        </label>
      )}
    {selectedFile && <PDFViewer file={selectedFile} />}
  </div>
  
  );
}

export default FileUpload;
