import React, { useState, useEffect } from 'react';
import Popup from './Popup'; 

function Avatar() {
  const [selectedAvatars, setSelectedAvatars] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); 
  const [selectedBackground, setSelectedBackground] = useState(''); 
  const [selectedVoice, setSelectedVoice] = useState(null); 
  const [voiceListVisible, setVoiceListVisible] = useState(false); 

  const options = ["in der Klasse", "am Arbeitsplatz"];
  const backgroundImages = {
    "in der Klasse": '/background/classroom.jpg',
    "am Arbeitsplatz": '/background/workspace.jpg',
  };

  const [avatars, setAvatars] = useState([]); 

  useEffect(() => {
    fetch('/avatars/avatarLinks.txt')
      .then((response) => response.text())
      .then((text) => {
        const avatarUrls = text.split('\n').filter((url) => url.trim() !== '');
        setAvatars(avatarUrls.map((imageUrl) => ({ imageUrl, altText: 'Avatar' })));
      })
      .catch((error) => {
        console.error('Error fetching avatars:', error);
      });
  }, []);

  const audioFiles = [
    'bernd_voice.mp3',
    'conrad_voice.mp3',
    'maja_voice.mp3',
    'elke_voice.mp3',
  ];

  const handleAvatarClick = (avatarUrl) => {
    if (selectedAvatars.includes(avatarUrl)) {
      setSelectedAvatars(selectedAvatars.filter((url) => url !== avatarUrl));
    } else {
      setSelectedAvatars([...selectedAvatars, avatarUrl]);
    }
  };

  const handleShowPopup = () => {
    setShowPopup(true); 
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      setSelectedBackground(backgroundImages[selectedOption]);
      setShowPopup(false); 
    }
  };

  const toggleVoiceList = () => {
    setVoiceListVisible(!voiceListVisible);
  };

  const handleVoiceClick = (voice) => {
    setSelectedVoice(voice);
    setVoiceListVisible(false); 
  };
 console.log('vvvv',selectedVoice);
  return (
    <div className="avatar-container">
      <div style={{ display: 'flex' }}>
        <div className="image-container">
          <div className="avatar-images">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`avatar ${selectedAvatars.includes(avatar.imageUrl) ? 'selected' : ''}`}
                onClick={() => handleAvatarClick(avatar.imageUrl)}
              >
                <img
                  src={avatar.imageUrl}
                  alt={avatar.altText}
                  className={`image ${selectedAvatars.includes(avatar.imageUrl) ? 'selected-border' : ''}`}
                />
              </div>
            ))}
          </div>
          <div
            className="selected-avatar"
            style={{ backgroundImage: `url(${selectedBackground})` }}
          >
            {selectedAvatars.length > 0 && (
              <>
                <div className="selected-avatars">
                  {selectedAvatars.map((avatarUrl, index) => (
                    <img key={index} src={avatarUrl} alt="Selected Avatar" className="image-selected" />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <button onClick={handleShowPopup} className='background'>
          Hintergrund auswählen
        </button>
        {showPopup && (
          <Popup options={options} onSelection={handleOptionSelection} onClose={handleNextButtonClick} />
        )}
      </div>
      <div className="voice-select">
        <div className="voice-label" onClick={toggleVoiceList}>
          {selectedVoice ? selectedVoice : "Select a Voice"}
          <i className={`arrow-icon ${voiceListVisible ? 'arrow-up' : 'arrow-down'}`} />
        </div>
        {voiceListVisible && (
          <div className="voice-list">
            {audioFiles.map((audioFile, index) => (
              <div key={index} onClick={() => handleVoiceClick(audioFile)} className={`voice ${selectedVoice === audioFile ? 'selected-voice' : ''}`}>
                {audioFile}
              </div>
            ))}
          </div>
        )}      
      {selectedVoice && !voiceListVisible && (
        <audio controls>
          <source src={`/voices/${selectedVoice}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      </div>
    </div>
  );
}

export default Avatar;
