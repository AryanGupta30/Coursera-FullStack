import React from 'react'
import { IoIosSearch } from "react-icons/io";
import './App.css';
export default function App() {
  return (
    <div>
      <div className='nav'>
        <img src={require('./assets/logo.png')} alt="Logo" 
        height={100}
        width={160}/>
        <button>Explore</button>
        <input type="text" placeholder="Search for anything" />
        <div className='icon'>
          <IoIosSearch color='white' />
        </div>
        <div className='nav2'>
          <button className='opt'>Online Degrees</button>
          <button className='opt'>Find new careers</button>
          <button className='opt'>Log in </button>
          <button>Join for free</button>
        </div>
      </div>
    </div>
  )
}

