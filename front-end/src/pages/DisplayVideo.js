import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import output from '../output/output.mp4';
import './DisplayVideo.css'

const DisplayVideo = () => {
  const text = `Wasser ist eine chemische Verbindung, die aus den Elementen Wasserstoff und Sauerstoff besteht.
  Es ist lebenswichtig für alle Lebewesen auf der Erde und kommt in verschiedenen Formen wie
  flüssig, fest (Eis) und gasförmig (Wasserdampf) vor. Feuer ist eine chemische Reaktion,
  bei der Sauerstoff mit einem brennbaren Stoff reagiert. Dabei entstehen Wärme, Licht und
  verschiedene Gase. Das Wort Gras bezieht sich auf grüne Vegetation, die typischerweise den Boden in Rasenflächen,
  Wiesen und Feldern bedeckt. Es ist eine weit verbreitete Pflanze in vielen Teilen der Welt und
  wird oft als Futter für weidende Tiere wie Kühe und Schafe verwendet.`;

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Add event listeners to update the current time
    const player = document.querySelector('.video-player'); // Adjust the selector

    const handleTimeUpdate = (e) => {
      setCurrentTime(e.target.currentTime);
    };

    player.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      // Remove event listeners when the component unmounts
      player.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Function to split text into words, considering punctuation
  const splitTextIntoWords = (text) => {
    return text.match(/\b\w+\b/g);
  };

  // Determine the currently spoken word based on the video's current time
  const getCurrentWordIndex = (time) => {
    const words = splitTextIntoWords(text);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordStart = (i / words.length) * playerDuration;
      const wordEnd = ((i + 1) / words.length) * playerDuration;
      if (time >= wordStart && time < wordEnd) {
        return i;
      }
    }
    return -1; // No word found
  };

  const playerDuration = 45; // Adjust this value based on your video's duration

  const currentWordIndex = getCurrentWordIndex(currentTime);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>First Column</h1>
        </div>
        <div className="col">
          <div style={{ padding: 20 }}>
            <ReactPlayer
              url={output}
              controls
              width="50vw"
              height="50vh"
              className="video-player" // Add a class to the video player element
            />
          </div>
          <div style={{}}>
            <h6>
              {splitTextIntoWords(text).map((word, index) => (
                <span
                  key={index}
                  className={index === currentWordIndex ? 'highlighted-word' : ''}
                >
                  {word}{' '}
                </span>
              ))}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayVideo;
