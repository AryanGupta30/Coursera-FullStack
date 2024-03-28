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
import { IoIosSearch } from "react-icons/io";
import Cards1 from '../components/cards1';
import Explore from '../components/explore';
import Footer from '../components/footer';

const Home = () => {

    let items = [
        {
            img : require('../assets/learn.png'),
            heading: 'Learn Anything',
            para:'Explore any interest or trending topic, take prerequisites, and advance your skills'
        },
        {
            img : require('../assets/money.png'),
            heading: 'Save money',
            para:'Explore any interest or trending topic, take prerequisites, and advance your skills'
        },
        {
            img : require('../assets/flexible.png'),
            heading: 'Flexible learning',
            para:'Explore any interest or trending topic, take prerequisites, and advance your skills'
        },
        {
            img : require('../assets/certificates.png'),
            heading: 'Unlimited Certificates',
            para:'Explore any interest or trending topic, take prerequisites, and advance your skills'
        },

    ];

    let fields = ['POPULAR','Business','Computer Science','Data Science','Health','Information Technology','Arts and Humanities']
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
        <div style={{ margin: '20px', fontSize: '0.8rem',fontWeight:'normal' }}>
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
    <div className='benefits' style={{ display: 'flex', flexDirection: 'column',justifyContent:'space-between'}}>
        <div style={{ fontSize: '1rem', display: 'flex', justifyContent: 'center'}}>
            <h1 style={{fontWeight:'500'}}>
                Invest in your career with Coursera
            </h1>
        </div>
        <p style={{display: 'flex', fontSize:'1rem', justifyContent: 'center'}}>
            Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.
        </p>
        <div className='img-cards' style={{display:'flex', justifyContent: 'center'}}>
            {items.map((item, index) => (
                    <div key={index} style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px'}}>
                        <img src={item.img} alt="Item Image" style={{width:'100px', height:'80px'}}/>
                        <h3 style={{fontWeight:'400'}}>{item.heading}</h3>
                        <p style={{fontSize:'1rem', marginLeft: '50px'}}>{item.para}</p>
                    </div>
                ))}
        </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',display:'flex'}}>
        <div style={{ margin: '20px', fontSize: '0.8rem',fontWeight:'normal',paddingTop:'20px' }}>
            <h1>Search the 7,000+ courses in Coursera Plus</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <input type="text" placeholder="Arts and Humanities" style={{width:'1000px',backgroundColor:'white',border: '1px solid #ccc',marginLeft:'1px',borderRight:'none'}} />
        <button style={{height:'50px',width:'50px',backgroundColor:'white',border: '1px solid #ccc',borderLeft:'none',paddingRight:'40px'}}>
          <IoIosSearch color='black' style={{height:'30px',width:'30px',paddingRight:'20px'}} />
        </button>
        </div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'50px',marginRight:'20px'}}>
        {fields.map((field, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                <button style={{backgroundColor:'#ECEFEF',color:'blue',borderWidth: '1px', borderRadius: '30%'}}>{field}</button>
            </div>
        ))}
        </div>
    </div>

    <Cards1 />
    <Explore />
    <Footer />
    </>
  )
}

export default Home;