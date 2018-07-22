import React from 'react';

import Card from './Card.js';
import './TenDay.css';

const TenDay = (props) => {
  
  return (
    <div className="TenDay">
      {
        props.tenDayArray.map(day => {
          return (
            <Card 
              day={ day.date.weekday }
              icon={ day.icon_url }
              high={ `${day.high.fahrenheit}•`}
              low={`${day.low.fahrenheit}•`}
            />
          )
        })
      }
    </div>
  )
}

export default TenDay;