import React, { useState } from 'react';
import CardItem from './cardItem';
import "../css/cards1.css"
import { Link } from 'react-router-dom';

const programs = [
    {
        university: 'University of Illinois at Urbana-Champaign',
        degree: 'Master of Business Administration (IMBA)',
        img : require('../assets/imba.png'),
    },
    {
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Electrical Engineering',
        img : require('../assets/electrical.png'),
    },
    {
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Data Science',
        img : require('../assets/datascience.png'),
    },
    {
        university: 'University of Colorado Boulder',
        degree: 'Master of Enginnering in Engineering Management',
        img : require('../assets/engmanage.png'),
    },
    {
        university: 'University of Illinois at Urbana-Champaign',
        degree: 'Master of Business Administration (IMBA)',
        img : require('../assets/imba.png'),
    },
    {
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Electrical Engineering',
        img : require('../assets/electrical.png'),
    },
    {
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Data Science',
        img : require('../assets/datascience.png'),
    },
    {
        university: 'University of Colorado Boulder',
        degree: 'Master of Enginnering in Engineering Management',
        img : require('../assets/engmanage.png'),
    },
];

const MainFile = () => {
    const [showAll, setShowAll] = useState(false);
    const visiblePrograms = showAll ? programs : programs.slice(0, 4);
    return (
        <div className="programs-container">
            <h2>Degree Programs</h2>
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