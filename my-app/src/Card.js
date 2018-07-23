import React from 'react';

import './Card.css';

const Card = (props) => {
  const { 
    day, 
    hour, 
    icon, 
    temp, 
    high, 
    low, 
    condition 
  } = props;

  return (
    <article className="Card">
      {day && <div>{day}</div>}
      {hour && <div>{hour}</div>}
      <img alt={condition} src={icon} />
      {temp && <div>{temp}</div>}
      {low && <div>{low}{high}</div>}
    </article>
  )
}

export default Card;



  