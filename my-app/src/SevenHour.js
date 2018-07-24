import React from 'react';

import Card from './Card.js';
import './SevenHour.css';

const SevenHour = (props) => {
  let hourlyArray = props.hourlyArray.slice(0, -233);

  return (
    <div className="SevenHour">
      {
        hourlyArray.map((hour, i) => {
          return ( 
            <Card 
              key={ `hour ${i}` }
              hour={ hour.hour }
              icon={ hour.icon }
              temp={ `${hour.temp}°` }
              condition={ hour.condition }
            />
          )
        })
      }
    </div>
  )
}

export default SevenHour;