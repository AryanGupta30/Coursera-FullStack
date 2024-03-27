import React from 'react';
import CardItem from './cardItem';
import "../css/cards.css"

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
];

const MainFile = () => {
    return (
        <div className="programs-container">
            <h2>Degree Programs</h2>
            <p>Get a head start on a degree today</p>
            <h3>With these programs, you can build valuable skills, earn career credentials, and make progress toward a degree before you even enroll.</h3>
            
            <div className="programs-list">
                {programs.map((program, index) => (
                    <CardItem key={index} program={program} />
                ))}
            </div>

            <button>Show 8 more</button>
            <button style={{backgroundColor: 'white', color:'blue'}}>View all</button>
        </div>
    );
};

export default MainFile;