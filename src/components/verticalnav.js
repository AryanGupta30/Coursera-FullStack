import React, { useState, useEffect } from 'react';
import '../css/verticalnav.css';
import { infoData } from '../constants/data'; 
import ArticleCard from '../components/articlecard';

function ButtonGroup() {
    const [activeButton, setActiveButton] = useState('Home');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const filteredData = activeButton==='Home'?infoData : infoData.filter(item => item.domain === activeButton);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footerHeight = 560, topNavbarHeight = 430;
            const scrollPosition = window.pageYOffset;
      
            if (scrollPosition >= topNavbarHeight && scrollPosition <= window.innerHeight + footerHeight) {
              setIsSticky(true);
            } else {
              setIsSticky(false);
            }
          };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`button-group ${isSticky ? 'sticky' : ''}`}>
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
