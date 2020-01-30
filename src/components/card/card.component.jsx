import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monsterimg" src={`https://robohash.org/${props.names.id}?set=set2&size=180x180`} />
        
        <h2> {props.names.name} </h2>
        <p> {props.names.email} </p>
    </div>
)