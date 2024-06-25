import React from 'react'
import './App.css';
import Home from "./pages/Home.js"
import Degrees from './pages/Degrees.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

