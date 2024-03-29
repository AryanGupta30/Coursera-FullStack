import React from 'react'
import './App.css';
import Home from "./pages/Home.js"
import Degrees from './pages/Degrees.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/degrees" element={<Degrees />} />
      </Routes>
    </BrowserRouter>
  )
}

