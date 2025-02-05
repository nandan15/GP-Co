import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes,Route } from 'react-router'
import Home from './Pages/Home'
import Interiors from './Pages/Interiors'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interiors" element={<Interiors/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
