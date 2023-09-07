import React, { useState } from 'react';

function Popup({ options, onSelection, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Uncheck the option if it's already selected
    } else {
      setSelectedOption(option);
    }
  };

  const handleConfirmClick = () => {
    if (selectedOption) {
      onSelection(selectedOption);
      onClose();
    }
  };
  console.log('hhh',selectedOption);

  return (
    <div className="popup">
      <div className="popup-content">
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOption === option}
                  readOnly
                  style={{ marginRight: '10px' }}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <button className="popup-confirm" onClick={handleConfirmClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Popup;
