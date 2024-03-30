import React, { useState } from 'react';
import { faques } from '../constants/data';
import '../css/faq.css'

const FAQ = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedQues, setSelectedQues] = useState(null);
    const visibleQuestions = showAll ? faques : faques.slice(0, 3);

    return (
        <> 
            <div className="faq-container">
            <h2 style={{paddingBottom: '40px'}}>Frequently Asked questions</h2>
            <hr />
                {visibleQuestions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h3
                            className={`question ${selectedQues === index ? 'active' : ''}`}
                            onClick={() => setSelectedQues(selectedQues === index ? null : index)}
                        >
                            {item.ques}
                        </h3>
                        {selectedQues === index && <p className="answer">{item.description}</p>}
                        <hr />
                    </div>
                ))}
                <div className='but-div'>
                    <button className="show-button" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show all 8 frequently asked questions'}
                    </button>   
                </div>
            </div>
        </>
    );
};

export default FAQ;
