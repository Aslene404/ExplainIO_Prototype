import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus, faMagnifyingGlass, faMagnifyingGlassMinus, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const Pannel = () => {
  return (
<div class="card" style={{marginBottom: 10}}>
  <div class="card-body"style={{ display: 'flex', justifyContent: 'space-between' }}>
  <button style={{ color: 'grey', fontWeight: 'bold' }} type="button" class="btn"><FontAwesomeIcon icon={faBackward}  size="xl" />   Previous</button>
    <button  style={{ color: 'grey', fontWeight: 'bold' }} type="button" class="btn"> <FontAwesomeIcon icon={faForward}  size="xl" />  Next</button>
  <button style={{ color: 'grey', fontWeight: 'bold' }} type="button" class="btn">
    <FontAwesomeIcon icon={faMagnifyingGlassPlus}  size="xl"/>  Zoom In</button>
  <button style={{ color: 'grey', fontWeight: 'bold' }} type="button" class="btn"><FontAwesomeIcon icon={faMagnifyingGlassMinus} size="xl"/>  Zoom Out</button>
  
    <button style={{ color: 'grey', fontWeight: 'bold' }} type="button" class="btn"><FontAwesomeIcon icon={faMagnifyingGlass}  size="xl" />   Search</button>
   






  </div>
</div>  )
}

export default Pannel