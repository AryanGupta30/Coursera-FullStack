import React from 'react';
import "../css/carditem.css"

const CardItem = ({ program }) => {
    return (
        <div className="card">
            <img src={program.img} alt={program.title} style={{width: '90%', height: '180px', padding: '15px', borderRadius: '30px'}}/>
            <div className="card-content">
                <h3 style={{fontSize: '0.8rem'}}>{program.university}</h3>
                <p style={{fontSize: '0.8rem'}}>{program.degree}</p>
                <button className="degree">Earn a degree</button>
            </div>
        </div>
    );
};

export default CardItem;