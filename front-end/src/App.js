import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import Popup from './components/Popup';
import DisplayImage from './components/ChooseAvatar'; // Import the DisplayImage component

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDisplayImage, setShowDisplayImage] = useState(false);
  const [showUploadPDF, setShowUploadPDF] = useState(false);

  const options = ["Dialog zwischen Kollegen", "Frontalunterricht", "Ohne Charakter"];

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setShowDisplayImage(true); // Show DisplayImage when "Next" is clicked
  };

  const handleShowUploadPDF = () => {
    setShowDisplayImage(false); // Hide DisplayImage
    setShowUploadPDF(true); // Show UploadPDF when "Next" is clicked
  };

  return (
    <div className="App">
      {showUploadPDF ? (
        <FileUpload />
      ) : showDisplayImage ? (
        <DisplayImage />
      ) : (
        <Popup options={options} onSelection={handleOptionSelection} onClose={handleOptionSelection} />
      )}
      {showDisplayImage && (
         <img 
         src={'/image.png'}
         alt="Next"
         onClick={handleShowUploadPDF}
         style={{ cursor: 'pointer',width: '40px',
         height: '40px',
         margin: '5px 10px' }}
       />
      )}
    </div>
  );
}

export default App;
