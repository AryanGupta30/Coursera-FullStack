import React from 'react'
import Navbar from "../components/navbar"
import Footer from '../components/footer'
import tabgirl from '../assets/tab.png';

export default function Articles() {
  return (
    <>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{padding: '70px', paddingRight: '130px'}}>
            <h1 style={{fontSize: '3.1rem'}}>Coursera Articles</h1>
            <p style={{paddingRight:'150px', fontSize: '1.2rem'}}>We envision a world where anyone, anywhere has the power to transform their lives through learning. Take the next step in your learning journey by exploring these popular topics.</p>
        </div>
        <div style={{paddingRight: '160px'}}>
          <img src={tabgirl} alt="Logo" height={420} width={420} />
        </div>
      </div>
      <Footer />
    </>
  )
}
