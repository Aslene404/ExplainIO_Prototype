import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PDFViewer from './pages/PDFViewer';
import DisplayVideo from './pages/DisplayVideo';
import CreateVideo from './pages/CreateVideo';
import Profil from './pages/Profil';
import Contact from './pages/Contact';
import './App.css'

function App (){
 
  return(
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="/pdf-viewer" element={<PDFViewer />}></Route>
        <Route path="/createVideo" element={<CreateVideo />}></Route>
        <Route path="/displayVideo" element={<DisplayVideo />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/contact" element={<Contact />}></Route>


      </Routes>
    </main>
    </BrowserRouter>
  )

}

export default App