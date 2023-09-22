import React, {useState} from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import AvatarsPopUp from '../components/AvatarsPopUp';
import BackgroundPopUp from '../components/BackgroundPopUp';
import VoicesPopUp from '../components/VoicesPopUp';
import './CreateVideo.css'; 
import avatars from '../assets/avatarSelection.png';
import voices from '../assets/voices.png';
import locations from '../assets/location.jpg'
import emptyBackground from '../assets/emptyBackground.png';

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
        <div className="col-md-8" style={{ backgroundColor: '#ffffff', backgroundImage:{emptyBackground}, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    Second
  </div>
      </div>
      <div className="row" style={{ height: '40vh' }}>
        {/* Second Row - 60% of the screen */}
        <div className="col-md-4">
  {/* Card 1 */}
  <div className="card card-with-bg" style={{ maxWidth: '18rem', margin: '1rem' }}>
    <div className="card-bg">
      <img src={avatars} alt="Avatar" className="card-img" style={{ width: '100%', height: '250px' }} />
    </div>
    <div className="card-body d-flex flex-column justify-content-center align-items-center">
      <button type="button" onClick={handleOpenModal} class="btn" style={{ backgroundColor: "#89b248", color: "white" , borderRadius: 20}}>
        <strong>Choose Avatars</strong>
      </button>
      <AvatarsPopUp show={showModal} onClose={handleCloseModal} />
    </div>
  </div>
</div>
<div className="col-md-4">
  {/* Card 2 */}
  <div className="card card-with-bg" style={{ maxWidth: '18rem', margin: '1rem' }}>
    {/* Background Image Container */}
    <div className="card-bg">
      <img src={locations} alt="Location" className="card-img" style={{ width: '100%', height: '250px' }} />
    </div>
    {/* Card Content Container */}
    <div className="card-body d-flex flex-column justify-content-center align-items-center">
      {/* Button without text */}
      <button type="button" onClick={handleOpenBackgroundModal} class="btn" style={{ backgroundColor: "#89b248", color: "white" , borderRadius: 20}}>
        <strong>Choose Background</strong>
      </button>
      {/* Paragraph */}
      <BackgroundPopUp show={showBackgroundModal} onClose={handleCloseBackgroundModal} />
    </div>
  </div>
</div>
<div className="col-md-4">
  {/* Card 3 */}
  <div className="card card-with-bg" style={{ maxWidth: '18rem', margin: '1rem' }}>
    {/* Background Image Container */}
    <div className="card-bg">
      <img src={voices} alt="Voices" className="card-img" style={{ width: '100%', height: '250px' }} />
    </div>
    {/* Card Content Container */}
    <div className="card-body d-flex flex-column justify-content-center align-items-center">
      {/* Button without text */}
      <button type="button" onClick={handleOpenVoicesModal} class="btn" style={{ backgroundColor: "#89b248", color: "white" , borderRadius: 20}}>
        <strong>Choose Voices</strong>
      </button>
      {/* Paragraph */}
      <VoicesPopUp show={showVoicesModal} onClose={handleCloseVoicesModal} />
    </div>
  </div>
</div>

          
        </div>
      <button style={{ 
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 101,
    backgroundColor: "#89b248", color: "white" , borderRadius: 20 }} type="button" class="btn"
  onClick={handleCreate} disabled={true} ><strong>Create Video</strong></button>
    </div>
  );
}
export default CreateVideo;