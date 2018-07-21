import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <article className="Card">
      {/* <p>{props.day}</p> */}
      <p>{props.hour}</p>
      <p>{props.temp}</p>
      <img src={props.icon} />
      {/* <p>{props.high}</p>
      <p>{props.low}</p> */}
    </article>
  )
}

export default Card;



  