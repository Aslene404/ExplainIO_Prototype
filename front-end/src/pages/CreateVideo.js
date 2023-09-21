import React, {useState} from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import AvatarPopUp from '../components/AvatarPopUp';
import BackgroundPopUp from '../components/BackgroundPopUp';
import VoicesPopUp from '../components/VoicesPopUp';
import './CreateVideo.css'; 
import avatars from '../assets/avatarSelection.png'
const CreateVideo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showBackgroundModal, setShowBackgroundModal] = useState(false);
    const [showVoicesModal, setShowVoicesModal] = useState(false);

    const handleOpenBackgroundModal = () => {
      setShowBackgroundModal(true);
    };
  
    const handleCloseBackgroundModal = () => {
      setShowBackgroundModal(false);
    };
    const handleOpenVoicesModal = () => {
      setShowVoicesModal(true);
    };
  
    const handleCloseVoicesModal = () => {
      setShowVoicesModal(false);
    };
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    const annotations = location.state && location.state.text;
    const handleCreate = () => {
      navigate("/displayVideo");
    }
    return (
      <div className="container-fluid">
      <div className="row" style={{ height: '60vh' }}>
        {/* First Row - 40% of the screen */}
        <div className="col-md-4" style={{ backgroundColor: '#f0f0f0' }}>
          First 
        </div>
        <div className="col-md-8" style={{ backgroundColor: '#ffffff' }}>
          Second
        </div>
      </div>
      <div className="row" style={{ height: '40vh' }}>
        {/* Second Row - 60% of the screen */}
        <div className="col-md-4">
          {/* Card 1 */}
          {/* Card 1 */}
          <div className="card card-with-bg" style={{ width: '18rem', margin: '1rem' }}>
            {/* Background Image Container */}
            <div className="card-bg">
              <img src={avatars} alt="Background" />
            </div>
            {/* Card Content Container */}
            <div className="card-content">
              {/* Button without text */}
              <button type="button" onClick={handleOpenModal} className="btn">
              click here </button>
              {/* Paragraph */}
              <AvatarPopUp show={showModal} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Card 2 */}
          <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Clickable card content goes here.</p>
            
            </div>
            <button type="button" class=" btn" onClick={handleOpenBackgroundModal}>
        Open background
      </button>
      <BackgroundPopUp show={showBackgroundModal} onClose={handleCloseBackgroundModal} />
          </div>
        </div>
        <div className="col-md-4">
          {/* Card 3 */}
          <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Clickable card content goes here.</p>
             
            </div>
            <button type="button" class=" btn" onClick={handleOpenVoicesModal}>
        Open background
      </button>
      <VoicesPopUp show={showVoicesModal} onClose={handleCloseVoicesModal} />
          </div>

        </div>
        
      </div>
      <button style={{ 
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 101 
  }} type="button" class="btn btn-success" onClick={handleCreate} disabled={true} ><strong>Create Video</strong></button>
    </div>
  );
}
export default CreateVideo