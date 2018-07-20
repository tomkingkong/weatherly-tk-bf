import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  return (
    <section className="CurrentWeather">
      <h3>{props.currentCity}</h3>
      <h4>{props.currentDay}</h4>
      <p>{props.currentCondition}</p>
      <p>{props.currentTemp}</p>
      <p>High {props.currentHigh} 
        <span> Low {props.currentLow}</span>
      </p>
      <p>{props.summary}</p>
    </section>
  )
}

export default CurrentWeather;