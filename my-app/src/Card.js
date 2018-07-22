import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <article className="Card">
      <div>{props.month}</div>
      <div>{props.day}</div>
      <div>{props.hour}</div>
      <img src={props.icon} />
      <div>{props.temp}</div>
      <div>{props.low}{props.high}</div>
    </article>
  )
}

export default Card;



  