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
              hour={hour.FCTTIME.civil}
              icon={hour.icon_url}
              temp={`${hour.temp.english}°`}
            />
          )
        })
      }
    </div>
  )
}

export default SevenHour;