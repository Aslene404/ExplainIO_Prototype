import React, {useState, useEffect} from 'react'

import {useLocation, useNavigate } from 'react-router-dom';
import AvatarsPopUp from '../components/AvatarsPopUp';
import BackgroundPopUp from '../components/BackgroundPopUp';
import VoicesPopUp from '../components/VoicesPopUp';
import './CreateVideo.css'; 
import logo from '../assets/logo.png'
import avatars from '../assets/avatarSelection.png';
import voices from '../assets/voices.png';
import locations from '../assets/location.jpg'
import emptyBackground from '../assets/emptyBackground.png';
import SideBar from '../components/SideBar';

const CreateVideo = () => {
  
    const location = useLocation();
    const annotations = location.state && location.state.text;

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showBackgroundModal, setShowBackgroundModal] = useState(false);
    const [showVoicesModal, setShowVoicesModal] = useState(false);
    const [selectedBackground, setSelectedBackground] = useState();
    const [selectedVoices, setSelectedVoices] = useState([]);
    const [myElements, setMyElements] = useState({
      annotations: "",
      imageRight: "",
      imageLeft: "",
      backgroundImage: "",
      voice1: "",
      voice2: "",
    });
    myElements.annotations = annotations;
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
    const handleCreate = () => {
      navigate("/displayVideo");
    }
    const handleBackgroundSelected = (background) => {
      setSelectedBackground(background);
      setMyElements((prevElements) => ({
        ...prevElements,
        backgroundImage: background.name,
      }));
      console.log(myElements);
    };
  
    const handleAvatarsSelected = (avatars) => {
      setSelectedAvatars(avatars);
      setMyElements((prevElements) => ({
        ...prevElements,
        imageRight: avatars[0]?.name,
        imageLeft: avatars[1]?.name,
      }));
      console.log(myElements);
    };
    useEffect(() => {
      console.log(myElements); // Log the updated myElements whenever it changes
    }, [myElements]);
  
    const handleVoicesSelected = (voices) => {
      setSelectedVoices(voices);
      console.log("lenna",voices[0].name)
      console.log("lenna",voices[1].name)

      setMyElements((prevElements) => ({
        ...prevElements,
        voice1: voices[0].name,
        voice2: voices[1].name,
      }));
      console.log(myElements);
    };
  
    const [selectedAvatars, setSelectedAvatars] = useState([]);
    
    
    const swapAvatars = () => {
      if (selectedAvatars.length === 2) {
        setSelectedAvatars([selectedAvatars[1], selectedAvatars[0]]);
        myElements.imageRight= selectedAvatars[0].name;
      myElements.imageLeft= selectedAvatars[1].name;
      console.log(myElements)
      }
    };
    
    return (
      <div className="container-fluid">
      <div className="row" >
        <div className="col-md-3" style={{ backgroundColor: '#f0f0f0', height: "100vh" }}>
          <SideBar annotations={annotations} />
           
        </div>
        <div className="col-md-9" style = {{ width: '70vw'}}>
            <div className="col" style = {{height: '60vh'}}>
            <div  style={{ backgroundColor: '#ffffff',    backgroundImage: `url(${selectedBackground ? selectedBackground.image : emptyBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' , height: '95%', margin: 20, borderRadius: '10px', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', position: 'relative'}}>
              {(selectedAvatars.length> 0 ) ?
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
             <img src={selectedAvatars[0]?.image} alt="Avatar 1" style={{ width: '35%', height: 'auto', cursor: 'pointer' }}    data-toggle="popover" // Enable Bootstrap Popover
              data-content={"hi"}          onClick={swapAvatars} />
              
             <img src={selectedAvatars[1]?.image} alt="Avatar 2" style={{ width: '35%', height: 'auto' }}             onClick={swapAvatars}/>
    </div> : <div>
      
    </div> }
           
            {(selectedBackground) ? <div>
              
            </div> :<h2 style={{alignItems: 'center'}}> Start Your Creation Now.</h2>}
            <img src={logo} alt="logo"  style={{bottom: 20, right:20, width:140, height:70, position: 'absolute'}}/>
            </div>
            </div>
         <div className='col' style = {{height: '40vh'}}>
         <div className="row">
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
      <AvatarsPopUp show={showModal} onClose={handleCloseModal} onAvatarsSelected={handleAvatarsSelected} />
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
      <BackgroundPopUp show={showBackgroundModal} onClose={handleCloseBackgroundModal} onBackgroundSelected={handleBackgroundSelected}/>
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
      <VoicesPopUp show={showVoicesModal} onClose={handleCloseVoicesModal} onVoicesSelected={handleVoicesSelected} />
    </div>
  </div>
         </div>
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
  onClick={handleCreate} ><strong>Create Video</strong></button>
    </div>
  );
}
export default CreateVideo;