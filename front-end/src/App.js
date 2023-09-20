import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PDFViewer from './pages/PDFViewer';
import './App.css'

function App (){
 
  return(
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="/pdf-viewer" element={<PDFViewer />}></Route>

      </Routes>
    </main>
    </BrowserRouter>
  )

}

export default App