import React, { useState, useEffect } from 'react';
import Guide from './GuideApp';

function Accueil() {
  const backgroundImages = [
    '/home-backgrounds/background1.avif',
    '/home-backgrounds/background3.avif',
    '/home-backgrounds/background4.avif',
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(false); // State for showing/hiding the Guide component

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the imageIndex and cycle back to the first image if needed
      setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [backgroundImages.length]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImages[imageIndex]})`,
    animation: `slideBackground 0.8s ease-in-out`,
  };

  // Function to toggle the visibility of the Guide component
  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div className={`home-page`} style={backgroundStyle}>
      <div className="top-buttons">
        <button className="login-button">Login</button>
        <button className="signin-button">Sign In</button>
      </div>
      <button className="guide-button" onClick={toggleGuide}>
        Führung
      </button>
      {showGuide && <Guide  />  } {/* Render the Guide component when showGuide is true */}
      <div className="content-container">
        <h1>Welcome to Our Application</h1>
        <p>ExplainIO_Prototype</p>
      </div>
    </div>
  );
}

export default Accueil;
