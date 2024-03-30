import React, { useState } from 'react';
import CardItem from './cardItem';
import "../css/cards1.css"
import { Link } from 'react-router-dom';
import {programs} from '../constants/data'

const MainFile = () => {
    const [showAll, setShowAll] = useState(false);
    const visiblePrograms = showAll ? programs.slice(0,8) : programs.slice(0, 4);
    return (
        <div className="programs-container">
            <h2 style={{marginBottom:'5px'}}>Degree Programs</h2>
            <p>Get a head start on a degree today</p>
            <h3>With these programs, you can build valuable skills, earn career credentials, and make progress toward a degree before you even enroll.</h3>
            
            <div className="programs-list">
                {visiblePrograms.map((program, index) => (
                    <CardItem key={index} program={program} />
                ))}
            </div>

            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'Show 4 More'}
            </button>
            <Link to="/degrees" style={{backgroundColor: 'white', color:'blue'}}>View all<span>&#8594;</span></Link>
        </div>
    );
};

export default MainFile;