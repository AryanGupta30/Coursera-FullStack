// ArticleCard.js
import React from 'react';
import '../css/carditem.css';

const ArticleCard = ({ data }) => {
    return (
        <div className='artcard'>
            <img src={data.img} alt={data.domain} style={{ width: '300px', height: '180px', padding: '15px', borderRadius: '30px' }} />
            <div className="card-content">
                <h3 style={{ fontSize: '0.8rem' }}>{data.heading}</h3>
                <p style={{ fontSize: '0.8rem' }}>{data.description}</p>
            </div>
        </div>
    );
};

export default ArticleCard;
