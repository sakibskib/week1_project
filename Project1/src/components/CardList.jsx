import React from 'react';
import Card from './Card';
//import './CardList.css';

const CardList = ({items})=>{
    return (

        <div className='card-list'>
            {items.map((item, index) => (
                <Card 
                key={index} 
                title={item.title} 
                description={item.description} 
                link={item.link}
                image={item.image}/>
            ))}
        </div>
    );
};
export default CardList;