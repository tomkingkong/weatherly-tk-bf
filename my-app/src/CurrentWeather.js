import React from 'react';

import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { 
    currentCity, 
    currentState, 
    currentCondition, 
    currentDay, 
    currentTemp, 
    summary, 
    currentHigh, 
    currentLow,
    currentIcon 
  } = props.currWeatherObj;

  return (
    <section className="CurrentWeather">
      <div className="left-section">
        <h3>{currentCity}, {currentState}</h3>
        <h4>{currentDay}</h4>
        <p className="currentTemp">{currentTemp}°</p>
      </div>
      <div className="right-section">
        <span>
          <p>{currentCondition}</p>
          <img alt="condition" src={currentIcon} />
        </span>
        <p>{currentLow}° - {currentHigh}°</p>
        <p>{summary}</p>
      </div>
    </section>
  )
}

export default CurrentWeather;

