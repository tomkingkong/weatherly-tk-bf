import React from 'react';

import './Card.css';

const Card = (props) => {
  const { 
    month, 
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
      <div>{month}</div>
      <div>{day}</div>
      <div>{hour}</div>
      <img alt={condition} src={icon} />
      <div>{temp}</div>
      <div>{low}{high}</div>
    </article>
  )
}

export default Card;



  