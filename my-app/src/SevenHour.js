import React from 'react';

import Card from './Card.js';
import './SevenHour.css';

const SevenHour = (props) => {
  return (
    <div className="SevenHour">
      {
        props.hourlyArray.map(hour => {
          return ( <Card 
            hour={hour.FCTTIME.civil}
            icon={hour.icon_url}
            temp={hour.temp.english}
          />
          )
        })
      }
    </div>
  )
}

export default SevenHour;