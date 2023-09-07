import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import ChooseAvatar from './components/ChooseAvatar';
import Accueil from './components/Accueil';
import Popup from './components/Popup';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDisplayImage, setShowDisplayImage] = useState(false);
  const [showUploadPDF, setShowUploadPDF] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const options = ["Dialog zwischen Kollegen", "Frontalunterricht", "Ohne Charakter"];

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setShowDisplayImage(true);
  };

  const handleShowUploadPDF = () => {
    setShowDisplayImage(false);
    setShowUploadPDF(true);
  };

  const handlePopupOpen = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupClose = () => {
    setShowPopup(false);

  };

  return (
    <div className="App">

      {showUploadPDF ? (
        <FileUpload />
      ) : showDisplayImage ? (
        <ChooseAvatar />
      ) : (
        <Accueil />
      )}
      {showDisplayImage && (
        <img
          src={'/image.png'}
          alt="Next"
          onClick={handleShowUploadPDF}
          style={{
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            margin: '5px 10px',
          }}
        />
      )}
      {!showDisplayImage && !showUploadPDF  ? (
      <button
        onClick={handlePopupOpen} // Add a button to open the Popup
        className="popup-button">
        Lass es uns versuchen
      </button>): ''}
      {showPopup && (
        <Popup options={options} onSelection={handleOptionSelection} onClose={handlePopupClose} />

      )}
    </div>
    
  );
}

export default App;
