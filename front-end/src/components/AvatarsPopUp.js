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

const AvatarsPopUp = ({ show, onClose, onAvatarsSelected }) => {
  const [selectedAvatars, setSelectedAvatars] = useState([]);

  const handleAvatarClick = (avatar) => {
    // Check if two avatars are already selected
    if (selectedAvatars.length === 2) {
      return; // Do nothing if two avatars are already selected
    }

    // Check if the clicked avatar is already selected
    const isAvatarSelected = selectedAvatars.includes(avatar);

    if (isAvatarSelected) {
      // If it's already selected, unselect it
      setSelectedAvatars((prevSelectedAvatars) =>
        prevSelectedAvatars.filter((selected) => selected !== avatar)
      );
    } else {
      // If it's not selected and there are less than two selected, select it
      setSelectedAvatars((prevSelectedAvatars) => {
        const newSelectedAvatars = [...prevSelectedAvatars, avatar];
        console.log(newSelectedAvatars); 
        onAvatarsSelected(newSelectedAvatars);
        return newSelectedAvatars;
      });
    }
  };

  return (
    <div>
      <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none', backgroundColor: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Select Two Avatars</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  {avatars.map((avatar, index) => (
                    <div className="col-md-4" key={index}>
                      <div
                        className={`avatar-container ${selectedAvatars.includes(avatar) ? 'selected' : ''}`}
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
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#89b248", color: "white", borderRadius: 20 }}
                disabled={selectedAvatars.length !== 2}
                onClick={onClose}
              >
                <strong>Next</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarsPopUp;
