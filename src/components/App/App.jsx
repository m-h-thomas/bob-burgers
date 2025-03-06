import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Characters from '../Characters/Characters'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Episodes from '../Episodes/Episodes'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </>
  )
}

export default App