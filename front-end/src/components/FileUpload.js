import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import 'bootstrap/dist/css/bootstrap.min.css';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("lenna yekhou f file",file);
    setSelectedFile(file);

  };

  return (
    <div style={{ width: '100%', margin: 20 }}>
    <label className="btn btn-primary">
      Choose a PDF file
      <input
        type="file"
        style={{ display: 'none' }}
        accept=".pdf"
        onChange={handleFileChange}
      />
    </label>
    {selectedFile && <PDFViewer file={selectedFile} />}
  </div>
  
  );
}

export default FileUpload;
