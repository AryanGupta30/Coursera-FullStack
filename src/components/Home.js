import React from 'react'
import homeImage from '../assets/home.png';
import duke from '../assets/duke.png'
import google from '../assets/google.png'
import ibm from '../assets/ibm.png'
import illionis from '../assets/illionis.png'
import imperial from '../assets/imperial.png'
import penn from '../assets/penn.png'
import stanford from '../assets/stanford.png'
import umich from '../assets/umich.png'


const Home = () => {
  return (
    <>
    <div className='main-div' style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '80px', marginBottom: '85px'}}>
        <div className='second' style={{ marginRight: '80px', marginTop: '90px'}}>
            <h1 style={{fontSize: '3.5rem'}}>
                Unlimited access to Google certificates
            </h1>
            <p style={{fontSize: '1.2rem'}}>
                Gain the job-ready skills you need with a Google Professional Certificate. Start today and save $100 on your annual subscription. You can also unlock a 25% discount for your organization with Coursera for Teams.
            </p>
            <button style={{ fontSize: '1em', color: 'white', marginRight: '10px', padding: '15px 40px' }}>
                Save $100 now <span>&#8594;</span>
            </button>
            <button style={{ fontSize: '1em', color: '#00419e', backgroundColor: 'white', padding: '15px 30px' }}>
                Save on Coursera for Teams <span>&#8594;</span>
            </button>
        </div>
        <div className='second' style={{ marginRight: '17px'}}>
            <img src={homeImage} alt="Logo" height={500} width={700} />
        </div>
    </div>
    <div className='image-row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5'}}>
        <div style={{ margin: '20px', fontSize: '0.8rem' }}>
            <h1>We collaborate with <span style={{color: '#0056d2'}}>325+ leading universities and companies</span></h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '100px'}}>
            <img src={illionis} alt="ILLINOIS" style={{ marginRight: '10px', width: '150px', height: '60px' }} />
            <img src={duke} alt="Duke" style={{ marginRight: '10px', width: '120px', height: '60px', marginTop: '3px' }} />
            <img src={google} alt="Google" style={{ marginRight: '10px', width: '150px', height: '60px', marginTop: '-1px' }} />
            <img src={umich} alt="Umich" style={{ marginRight: '10px', width: '75px', height: '90px', marginTop: '-10px' }} />
            <img src={ibm} alt="IBM" style={{ marginRight: '10px', width: '150px', height: '60px'}} />
            <img src={imperial} alt="Imperial" style={{ marginRight: '10px', width: '150px', height: '60px'}} />
            <img src={stanford} alt="Stanford" style={{ marginRight: '10px', width: '135px', height: '50px', marginTop: '7px'}} />
            <img src={penn} alt="Penn" style={{ marginRight: '10px', width: '150px', height: '60px'}} />
            
        </div>
    </div>
    </>
  )
}

export default Home;