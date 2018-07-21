import React from 'react';

import Card from './Card.js';
import './TenDay.css';

const TenDay = (props) => {
  return (
    <div className="TenDay">
      {props.tenDayArray.map(day => {
        return(
          <Card 
            month={day.date.month}
            day={day.date.day}
            icon={day.icon_url}
            high={day.high.fahrenheit}
            low={day.low.fahrenheit}
          />
        )
      })
    }
    </div>
  )
}

export default TenDay;