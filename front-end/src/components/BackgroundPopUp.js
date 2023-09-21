import React, { useState } from 'react';

// Import your avatar images here
import classroom from "../assets/backgrounds/classroom.png";
import modern_office from "../assets/backgrounds/modern_office.png";
import office from "../assets/backgrounds/office.jpg";
import playground from "../assets/backgrounds/playground.png";


const avatars = [
  { image: classroom, name: "Classroom" },
  { image: modern_office, name: "Modern Office" },
  { image: office, name: "Office" },
  { image: playground, name: "Playground" },

];

const BackgroundPopUp = ({ show, onClose }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedBackground(avatar);
  };

  return (
    <div>
      <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  {avatars.map((avatar, index) => (
                    <div className="col-md-4" key={index}>
                      <div
                        className={`avatar-container ${selectedBackground === avatar ? 'selected' : ''}`}
                        onClick={() => handleAvatarClick(avatar)}
                      >
                        <img src={avatar.image} alt={`Avatar ${index + 1}`} className="img-fluid" />
                        <strong>{avatar.name}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPopUp;
