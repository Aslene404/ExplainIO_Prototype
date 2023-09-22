import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PDFViewer from './pages/PDFViewer';
import DisplayVideo from './pages/DisplayVideo';
import CreateVideo from './pages/CreateVideo';
import Profile from './pages/Profile';
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
        <Route path="/profile" element={<Profile />}></Route>


      </Routes>
    </main>
    </BrowserRouter>
  )

}

export default App