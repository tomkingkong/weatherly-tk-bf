import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  return (
    <section className="CurrentWeather">
      <h3>{props.currentCity}, {props.currentState}</h3>
      <h4>{props.currentDay}</h4>
      <p>{props.currentCondition}</p>
      <p>{props.currentTemp}</p>
      <p>{props.currentHigh} {props.currentLow}</p>
      <p>{props.summary}</p>
    </section>
  )
}

export default CurrentWeather;