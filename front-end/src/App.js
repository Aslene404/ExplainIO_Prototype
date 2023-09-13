import React, { useState,useEffect } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import ChooseAvatar from './components/ChooseAvatar';
import Accueil from './components/Accueil';
import Popup from './components/Popup';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://aslene.pythonanywhere.com/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://aslene.pythonanywhere.com/api/info'); 
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
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
      <h1>Hello from React!</h1>
      <p>{message}</p>
      <button onClick={fetchData}>Fetch Data</button>
      {data ? (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Press the button to fetch data.</p>
      )}

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
