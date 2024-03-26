import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { Button } from 'react-bootstrap';

export default function App() {
  return (
    <Container>
      <div className='nav'>
        <img src={require('./assets/logo.png')} alt="Logo" 
        height={100}
        width={160}/>
        <button>Explore</button>
        <input type="text" placeholder="Search for anything"/>
        <div className='icon'>
          <IoIosSearch color='white' />
        </div>
        <div className='nav2'>
          <Button className='opt'>Online Degrees</Button>
          <Button className='opt'>Find new careers</Button>
          <Button className='opt'>Log in </Button>
          <Button>Join for free</Button>

        </div>

      </div>
    </Container>

  )
}



