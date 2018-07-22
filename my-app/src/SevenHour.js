import React from 'react';

import Card from './Card.js';
import './SevenHour.css';

const SevenHour = (props) => {
  let hourlyArray = props.hourlyArray.slice(0, -29);

  return (
    <div className="SevenHour">
      {
        hourlyArray.map(hour => {
          return ( 
            <Card 
              hour={hour.hour}
              icon={hour.icon}
              temp={`${hour.temp}°`}
            />
          )
        })
      }
    </div>
  )
}

export default SevenHour;