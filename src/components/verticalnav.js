import React, { useState } from 'react';
import '../css/verticalnav.css';
import { infoData } from '../constants/data';  // Assuming you have imported the data correctly
import ArticleCard from '../components/articlecard';  // Assuming the correct component name is ArticleCard

function ButtonGroup() {
    const [activeButton, setActiveButton] = useState('Home');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    // Filter the data array based on the active button
    const filteredData = infoData.filter(item => item.id === activeButton);
    console.log(filteredData);

    return (
        <>
            <div className="button-group">
                <button
                    className={`buttt ${activeButton === 'Home' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Home')}
                    disabled={activeButton === 'Home'}
                >
                    Home
                </button>
                <button
                    className={`buttt ${activeButton === 'Data' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Data')}
                    disabled={activeButton === 'Data'}
                >
                    Data
                </button>
                <button
                    className={`buttt ${activeButton === 'Business' ? 'active' : ''} `}
                    onClick={() => handleButtonClick('Business')}
                    disabled={activeButton === 'Business'}
                >
                    Business
                </button>
                <button
                    className={`buttt ${activeButton === 'IT' ? 'active' : ''} `}
                    onClick={() => handleButtonClick('IT')}
                    disabled={activeButton === 'IT'}
                >
                    IT
                </button>
                <button
                    className={`buttt ${activeButton === 'Health' ? 'active' : ''} `}
                    onClick={() => handleButtonClick('Health')}
                    disabled={activeButton === 'Health'}
                >
                    Health
                </button>
            </div>

            <div className="info-content">
                {filteredData.map(item => (
                    <ArticleCard key={item.id} data={item} />
                ))}
            </div>
        </>
    );
}

export default ButtonGroup;
