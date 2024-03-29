import React, { useState } from 'react';
import '../css/reviewvid.css';

const videos = [
    {
        url: require('../assets/video1.mp4'),
        description: 
        "Live sessions, office hours, discussion boards—participating from wherever I am for my MBA makes me feel empowered; I don't have to stop working, being a mother, or having my life.",
    },
    {
        url: require('../assets/video2.mp4'),
        description: "The program offered me the chance to improve my ability to solve global-scale problems, engaging in numerous hands-on projects, crucial for building confidence as a student entering a new field.",
    },
    {
        url: require('../assets/video3.mp4'),
        description: "The program's flexibility is exceptional. I aim to maintain my job while acquiring the skills to become a better entrepreneur and intrapreneur. I've grown into a superior boss, collaborator, and inspirer of my global teams.",
    },
    {
        url: require('../assets/video4.mp4'),
        description: 
        "There's a strong community on Slack and online—potentially even stronger than what some of us encountered in our campus-based undergraduate programs.",
    },
    {
        url: require('../assets/video5.mp4'),
        description: "I love the flexibility this program offers. Being able to access materials and attend live lectures from anywhere using my phone or laptop is fantastic.",
    },
];

const VideoComponent = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    return (
        <div className="video-component">
            <h1 style={{color: 'white', marginTop: '-50px', marginBottom: '40px'}}>Hear why students enjoy learning on Coursera</h1>
            <div className="video-description" style={{display: 'flex', justifyContent: 'center'}}>
                <button className='icons1' disabled={currentVideo === 0} onClick={() => setCurrentVideo(currentVideo - 1)}>
                    &lt;
                </button>
                <video src={videos[currentVideo].url} controls paused style={{objectFit: 'cover'}}/>
                <div style={{backgroundColor: 'white', padding: '100px', fontSize: '1.2rem', objectFit: 'cover',width:'520px',height:'180px'}}>
                    {videos[currentVideo].description}
                </div>
                <button className='icons1' disabled={currentVideo === videos.length - 1} onClick={() => setCurrentVideo(currentVideo + 1)}>
                    &gt;
                </button>
            </div>

            <div className="icons2">
                {videos.map((_, index) => (
                    <button key={index} className={`my-button ${index === currentVideo ? 'active' : ''}`} />
                ))}
            </div>
        </div>
    );
};

export default VideoComponent;
