import React, { useState } from 'react';

import bernd_voice from '../voices/bernd_voice.mp3';
import conard_voice from '../voices/conrad_voice.mp3';
import elke_voice from '../voices/elke_voice.mp3';
import kasper_voice from '../voices/kasper_voice.mp3';
import klarissa_voice from '../voices/klarissa_voice.mp3';
import maja_voice from '../voices/maja_voice.mp3';

const voices = [
  { voice: bernd_voice, name: "Bernd" },
  { voice: conard_voice, name: "Conard" },
  { voice: elke_voice, name: "Elke" },
  { voice: kasper_voice, name: "Kasper" },
  { voice: klarissa_voice, name: "Klarissa" },
  { voice: maja_voice, name: "Maja" },
];

const VoicesPopUp = ({ show, onClose, onVoicesSelected }) => {
  const [selectedVoices, setSelectedVoices] = useState([]);

  const handleAvatarClick = (voice) => {
    if (selectedVoices.includes(voice)) {
      // Deselect the voice if it's already selected.
      setSelectedVoices(selectedVoices.filter((v) => v !== voice));
    } else {
      // Select the voice if it's not already selected.
      setSelectedVoices([...selectedVoices, voice]);
    }
  };

  const handleNextClick = () => {
    if (selectedVoices.length === 2) {
      onVoicesSelected(selectedVoices);
      console.log(selectedVoices);
      onClose();
    }
  };

  return (
    <div>
      <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Choose Two Voices</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  {voices.map((voice, index) => (
                    <div className="col-md-4" key={index}>
                      <div
                        style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px' }}
                        className={`voices-container ${selectedVoices.includes(voice) ? 'selected' : ''}`}
                        onClick={() => handleAvatarClick(voice)}
                      >
                        <div className="audio-container">
                          <audio controls>
                            <source src={voice.voice} type="audio/mp3" />
                          </audio>
                        </div>
                        <strong>{voice.name}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        <div className="modal-footer">
          <button
            type="button"
            className={`btn ${selectedVoices.length === 2 ? 'btn-success' : 'btn-secondary'}`}
            style={{ borderRadius: 20 }}
            onClick={handleNextClick} // Call handleNextClick when the "Next" button is clicked
            disabled={selectedVoices.length !== 2}
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

export default VoicesPopUp;
