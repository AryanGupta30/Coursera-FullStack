import React from 'react'
import { IoIosSearch } from "react-icons/io";
import './App.css';
import Home from "./components/Home.js"
export default function App() {
  return (
    <div>
      <div className='nav'>
        <img src={require('./assets/logo.png')} alt="Logo" 
        height={100}
        width={160}/>
        <button style={{marginTop: '-3px'}}>Explore</button>
        <input type="text" placeholder="What do you want to learn?" />
        <div className='icon'>
          <IoIosSearch color='white' />
        </div>
        <div className='nav2'>
          <div className="dropdown">
            <button className='opt'>Degrees</button>
            <div className="dropdown-content">
              <a href="#"><b>Online Degree</b>
                <p>Explore Bachelor's & Master's Degrees</p>
              </a>
              <a href="#"><b>MasterTrack</b>
                <p>Earn credit towards a Master's Degree</p>
              </a>
              <a href="#"><b>University Certificates</b>
                <p>Advace your career with graduate-level learning</p>
              </a>
            </div>
          </div>
          <button className='opt'>Find Careers</button>
          <button className='opt2'>Log in </button>
          <button>Join for free</button>
        </div>
      </div>
      <Home />
    </div>
  )
}

