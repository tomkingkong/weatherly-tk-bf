import React from 'react';

import Card from './Card.js';
import './TenDay.css';

const TenDay = (props) => {
  
  return (
    <div className="TenDay">
      {
        props.tenDayArray.map((day, i) => {
          return (
            <Card 
              key={ `day ${i}` }
              day={ day.day }
              icon={ day.icon }
              high={ `${day.high}°` }
              low={ `${day.low}°- ` }
            />
          )
        })
      }
    </div>
  )
}

export default TenDay;