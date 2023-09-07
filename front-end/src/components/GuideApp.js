import React from 'react';

function Guide() {
  return (
    <div className="guide-container ">
      <h2>Guide</h2>
      <p>Watch this video for a quick guide:</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="http://www.youtube.com/watch?v=uf3-gW4RJBs&ab_channel=ZiedMcHarek"
          title="Guide Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Guide;
