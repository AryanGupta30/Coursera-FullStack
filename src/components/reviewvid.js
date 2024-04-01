import React, { useState } from 'react';
import '../css/reviewvid.css';
import { videos } from '../constants/data';

const VideoComponent = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    return (
        <div className={`video-component video-slide`}>
            <h1 style={{color: 'white', marginTop: '-50px', marginBottom: '40px'}}>Hear why students enjoy learning on Coursera</h1>
            <div className="video-description">
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
