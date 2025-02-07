import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes,Route } from 'react-router'
import Home from './Pages/Home'
import Interiors from './Pages/Interiors'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUs from './Pages/ContactUs'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interiors" element={<Interiors/>} />
        <Route path='/aboutus' element={<AboutUsPage/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
