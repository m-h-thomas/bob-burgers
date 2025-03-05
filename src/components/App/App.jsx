import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Characters from '../Characters/Characters'
import NavBar from '../NavBar/NavBar'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </>
  )
}

export default App