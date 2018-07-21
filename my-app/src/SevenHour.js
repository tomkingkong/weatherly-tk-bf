import React from 'react';

import Card from './Card.js';
import './SevenHour.css';


const SevenHour = (props) => {
  return (
    <div className="SevenHour">
      {
        props.hourlyArray.map(hour => <p>{hour.FCTTIME.civil}</p>)
      }
    </div>
  )
}

export default SevenHour;