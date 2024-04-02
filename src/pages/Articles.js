import React, { useEffect } from 'react'
import Navbar from "../components/navbar"
import Footer from '../components/footer'
import tabgirl from '../assets/tab.png';
import Vertnav from '../components/verticalnav';

export default function Articles() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', backgroundColor: '#f5f7f8'}}>
        <div style={{padding: '70px', paddingRight: '130px'}}>
            <div><h1 style={{fontSize: '3.1rem', fontWeight: 'normal'}}>Coursera Articles</h1></div>
            <p style={{paddingRight:'150px', fontSize: '1.2rem'}}>We envision a world where anyone, anywhere has the power to transform their lives through learning. Take the next step in your learning journey by exploring these popular topics.</p>
        </div>
        <div style={{paddingRight: '160px'}}>
          <img src={tabgirl} alt="Logo" height={380} width={380} style={{marginTop:'20px'}} />
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
        <Vertnav />
      </div>
      <Footer />
    </>
  )
}
