import React, { useState } from 'react';

// Import your avatar images here
import classroom from "../assets/backgrounds/classroom.png";
import modern_office from "../assets/backgrounds/modern_office.png";
import office from "../assets/backgrounds/office.jpg";
import playground from "../assets/backgrounds/playground.png";

const backgrounds = [
  { image: classroom, name: "Classroom" },
  { image: modern_office, name: "Modern Office" },
  { image: office, name: "Office" },
  { image: playground, name: "Playground" },
];

const BackgroundPopUp = ({ show, onClose }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleBackgroundClick = (background) => {
    setSelectedBackground(background);
  };

  return (
    <div>
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: show ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Select a Background</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  {backgrounds.map((background, index) => (
                    <div className="col-md-6" key={index}>
                      <div
                        className={`background-container ${selectedBackground === background ? 'selected' : ''}`}
                        onClick={() => handleBackgroundClick(background)}
                      >
                        <img src={background.image} alt={`Background ${index + 1}`} className="img-fluid" />
                        <strong>{background.name}</strong>
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
                disabled={!selectedBackground}
                onClick={() => {
                 
                  console.log("Selected Background:", selectedBackground);
                  onClose();
                }}
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

export default BackgroundPopUp;
