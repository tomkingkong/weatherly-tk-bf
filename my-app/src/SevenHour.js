import React from 'react';

import Card from './Card.js';
import './SevenHour.css';


const SevenHour = (props) => {
  return (
    <div className="SevenHour">
    <h1>{props.updateSevenHour}</h1>
    </div>
  )
}

export default SevenHour;