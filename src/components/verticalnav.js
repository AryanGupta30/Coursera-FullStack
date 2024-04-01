import React, { useState } from 'react';
import '../css/verticalnav.css'

function ButtonGroup() {
    const infoData = {
        Home: 'Welcome to our website!',
        Data: 'Here is some data information...',
        Business: 'Learn more about our business...',
      };
  const [activeButton, setActiveButton] = useState('Home');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="button-group">
      <button
        className={`buttt ${activeButton === 'Home' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Home')}
      >
        Home
      </button>
      <button
        className={`buttt ${activeButton === 'Data' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Data')}
      >
        Data
      </button>
      <button
        className={`buttt ${activeButton === 'Business' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Business')}
      >
        Business
      </button>
    </div>
  );
}

export default ButtonGroup;
