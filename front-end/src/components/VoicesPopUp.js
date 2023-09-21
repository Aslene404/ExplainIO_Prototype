import React, { useState } from 'react';

// Import your avatar images here
import av_1 from "../assets/avatars/av_1.png";
import av_2 from "../assets/avatars/av_2.png";
import av_3 from "../assets/avatars/av_3.png";
import av_4 from "../assets/avatars/av_4.png";
import av_5 from "../assets/avatars/av_5.png";
import av_6 from "../assets/avatars/av_6.png";

const avatars = [
  { image: av_1, name: "Avatar 1" },
  { image: av_2, name: "Avatar 2" },
  { image: av_3, name: "Avatar 3" },
  { image: av_4, name: "Avatar 4" },
  { image: av_5, name: "Avatar 5" },
  { image: av_6, name: "Avatar 6" },
];

const VoicesPopUp = ({ show, onClose }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
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
                        className={`avatar-container ${selectedAvatar === avatar ? 'selected' : ''}`}
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

export default VoicesPopUp;
