import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import Search from './Search.js';
import CurrentWeather from './CurrentWeather.js';
import Key from './Key.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: 'DENVER',
      selectedState: 'CO',
      selectedCondition: '',
      selectedTemp: '',
      selectedHigh: '',
      selectedLow: '',
      selectedSummary: ''
    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/co/denver.json`)
      .then(response => response.json())
        .then(data => {
          this.setState({
            selectedCondition: data.forecast.simpleforecast.forecastday[0].conditions,
            selectedDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
            selectedTemp: data.current_observation.temp_f,
            selectedHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
            selectedLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
            selectedSummary: data.forecast.txt_forecast.forecastday[0].fcttext
          })
          console.log(data)
        })
          .catch(error => { throw new Error(error) });
  }

  updateLocation = (city, state) => {
    let newCity = city;
    let newState = state;
    this.setState({
      selectedCity: newCity,
      selectedState: newState
    })

    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${newState}/${newCity}.json`)
      .then(response => response.json())
        .then(data => {
          this.setState({
            selectedCondition: data.forecast.simpleforecast.forecastday[0].conditions,
            selectedDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
            selectedTemp: data.current_observation.temp_f,
            selectedHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
            selectedLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
            selectedSummary: data.forecast.txt_forecast.forecastday[0].fcttext
          })
          console.log(data)
        })
          .catch(error => { throw new Error(error) });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search updateLocation={this.updateLocation}/>
        <CurrentWeather 
         currentCity={this.state.selectedCity}
         currentState={this.state.selectedState}
         currentDay={this.state.selectedDay}
         currentCondition={this.state.selectedCondition}
         currentTemp={this.state.selectedTemp}
         currentHigh={this.state.selectedHigh}
         currentLow={this.state.selectedLow}
         summary={this.state.selectedSummary}
        />
      </div>
    );
  }
}

export default App;
