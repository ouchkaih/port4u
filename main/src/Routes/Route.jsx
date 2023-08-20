import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

function MainRoutes() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" elements={<Home/>}/>
            <Route path="/about-me" elements={<Home/>}/>
            <Route path="/projects" elements={<Home/>}/>
            <Route path="/education" elements={<Home/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes