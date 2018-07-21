import React from 'react';

import Card from './Card.js';
import './TenDay.css';

const TenDay = (props) => {
  return (
    <div className="TenDay">
      {props.tenDayArray.map(day => {
        return(
          <Card 
            day={day.date.pretty}
            icon={day.icon_url}
            temp={day.high.fahrenheit}
          />
        )
      })
    }
    </div>
  )
}

export default TenDay;