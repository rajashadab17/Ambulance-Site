import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Footer.css'
import './Responsive.css'
import FixedObjects from './Components/FixedObjects'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Location from './Components/Location'
import Ambulances from './Components/Ambulances'
import Contact from './Components/Contact'

const App = () => {

  

  return (
    <>
    <FixedObjects/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/locations' element={<Location/>}/>
      <Route path='/ambulances' element={<Ambulances/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App