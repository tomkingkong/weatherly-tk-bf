import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  return (
    <section className="CurrentWeather">
      <div className="left-section">
        <h3>{props.currentCity}, {props.currentState}</h3>
        <h4>{props.currentDay}</h4>
        <p>{props.currentTemp}°</p>
      </div>
      <div className="right-section">
        <span>
          <p>{props.currentCondition}</p>
          <img src={props.currentIcon} />
        </span>
        <p>{props.currentHigh} {props.currentLow}</p>
        <p>{props.summary}</p>
      </div>
    </section>
  )
}

export default CurrentWeather;