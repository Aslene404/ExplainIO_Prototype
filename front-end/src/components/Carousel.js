import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../assets/one.jpg'; // Import your image
import UploadPdf from './UploadPdf';
const Bar = () => {
  return (
    <div>
      <div className="carousel-container" style={{ maxHeight: '50vh' }}>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: '70vh' }}>
          <img src={one} className="d-block w-100 h-100" alt="background" />
          <div className="carousel-caption">
            <h1>Create Your Own Course</h1>
            <h4>Upload Your PDF And Start Now!</h4>
            <UploadPdf />
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    
  
  
  );
}

export default Bar;
