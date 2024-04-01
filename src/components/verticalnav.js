import React, { useState } from 'react';
import '../css/verticalnav.css'

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState('Home');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="button-group">
      <button
        className={`opt ${activeButton === 'Home' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Home')}
      >
        Home
      </button>
      <button
        className={`opt ${activeButton === 'Data' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Data')}
      >
        Data
      </button>
      <button
        className={`opt ${activeButton === 'Business' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Business')}
      >
        Business
      </button>
    </div>
  );
}

export default ButtonGroup;
