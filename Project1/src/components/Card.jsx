import React from 'react';
import './Card.css';

const Card  = ({title, description, link,image })=>{
    return (

        <div className='card'>
            {image && <img src={image} alt={title} className="card-image" />}
            <div className='card-content'>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>View in Map</a>
            </div>
        </div>
    );
};

export default Card;