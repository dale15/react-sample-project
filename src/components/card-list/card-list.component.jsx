import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card.component'


export const CardList = props => (
    <div className = 'card-list'> 
        {props.names.map(fullname => (
            <Card key = {fullname.id} names = {fullname} />
        ))}
    </div>
)