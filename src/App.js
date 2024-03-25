import React from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";

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

      </div>
    </Container>

  )
}

const Container = styled.div`
  .nav {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  button {
    padding: 0.5rem 1rem;
    background-color: blue;
    border-radius: 0.5rem;
    border-width: 1.5px;
    cursor: pointer;
    font-size: 1rem;
    color: white;
    font-weight: 500;
    transition: 0.3s;
    margin-right: 6px;
  }
  button:hover {
    background-color: #f0f0f0;
  }
  input {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #333;
    font-weight: 500;
    background-color: #f0f0f0;
    border-width: 1px;
  }
  .icon{
    background-color: blue;
    border-radius: 0.1rem;
    padding: 0.5rem 0.8rem;
    margin-right: 6px;
  }
  
`


