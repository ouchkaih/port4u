import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import HeroSection from '../components/heroSection/HeroSection'

function MainRoutes() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-me" element={<Home/>}/>
            <Route path="/projects" element={<Home/>}/>
            <Route path="/education" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes