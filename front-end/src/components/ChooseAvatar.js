import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component

function Avatar() {
  const [selectedAvatars, setSelectedAvatars] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
  const [selectedBackground, setSelectedBackground] = useState(''); // State to store the selected background image URL

  const options = ["in der Klasse", "am Arbeitsplatz"];
  const backgroundImages = {
    "in der Klasse": '/background/classroom.jpg',
    "am Arbeitsplatz": '/background/workspace.jpg',
  };

  const avatars = [
    { imageUrl: '/avatars/avatar1.jpg', altText: 'Avatar 1' },
    { imageUrl: '/avatars/avatar2.jpg', altText: 'Avatar 2' },
  ];

  const handleAvatarClick = (avatarUrl) => {
    if (selectedAvatars.includes(avatarUrl)) {
      setSelectedAvatars(selectedAvatars.filter((url) => url !== avatarUrl));
    } else {
      setSelectedAvatars([...selectedAvatars, avatarUrl]);
    }
  };

  const handleShowPopup = () => {
    setShowPopup(true); // Show the popup when the button is clicked
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      setSelectedBackground(backgroundImages[selectedOption]);
      setShowPopup(false); // Close the popup after selecting an option
    }
  };

  return (
    <div className="avatar-container">
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
                <img key={index} src={avatarUrl} alt="Selected Avatar" className="image" />
              ))}
            </div>
          </>
        )}
      </div>
      </div>
      <button onClick={handleShowPopup} className='background'>Hintergrund auswählen</button> {/* Button to show the popup */}
      {showPopup && (
        <Popup options={options} onSelection={handleOptionSelection} onClose={handleNextButtonClick} />
      )}
    </div>
  );
}

export default Avatar;
