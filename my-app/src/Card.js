import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <article className="Card">
{props.selectedDay}
{props.selectedTemp}
{props.selectedHigh}
{props.selectedLow}
{props.selectedHour}
    </article>
  )
}

export default Card;



  