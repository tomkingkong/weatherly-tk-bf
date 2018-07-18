import React, { Component } from 'react';
import './CurrentWeather.css';



export default class CurrentWeather extends Component {
  constructor() {
    super();

    this.state = {
      currentCity: 'Denver',
      currentDay: 'Tuesday',
      currentCondition: 'Fair',
      currentTemp: '70 deg F',
      expectedHigh: 90,
      expectedLow: 39,
      summary: 'windy with hair, windy with hair, windy with hair'
    }
  }
  render() {
    return (
      <section className="CurrentWeather">
        <h3>{this.state.currentCity}</h3>
        <h4>{this.state.currentDay}</h4>
        <p>{this.state.currentCondition}</p>
        <p>{this.state.currentTemp}</p>
        <p>High {this.state.expectedHigh} 
          <span> Low {this.state.expectedLow}</span>
        </p>
        <p>{this.state.summary}</p>


      </section>
    )
  }

}