import React, { useState } from 'react';
import av_1 from "../assets/avatars/av_1.png";
import av_2 from "../assets/avatars/av_2.png";
import av_3 from "../assets/avatars/av_3.png";
import av_4 from "../assets/avatars/av_4.png";
import av_5 from "../assets/avatars/av_5.png";
import av_6 from "../assets/avatars/av_6.png";
import './AvatarPopUp.css'; // Import your CSS file

const avatars = [
  { image: av_1, name: "Maximilian" },
  { image: av_2, name: "Lukas" },
  { image: av_3, name: "Marie" },
  { image: av_4, name: "Clara" },
  { image: av_5, name: "Felix" },
  { image: av_6, name: "Sofia" },
];

const AvatarPopUp = ({ show, onClose }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div>
      <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none', backgroundColor: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
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

export default AvatarPopUp;
