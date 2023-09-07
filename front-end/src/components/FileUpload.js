import React, { useState } from 'react';
import PDFViewer from './PDFViewer';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("lenna yekhou f file",file);
    setSelectedFile(file);

  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {selectedFile && <PDFViewer file={selectedFile} />}
    </div>
  );
}

export default FileUpload;
