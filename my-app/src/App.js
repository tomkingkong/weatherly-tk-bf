import React, { Component } from 'react';

import './App.css';
import Key from './Key.js';
import Header from './Header.js';
import Search from './Search.js';
import Handler from './Handler.js';
import CurrentWeather from './CurrentWeather.js';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: 'DENVER',
      selectedState: 'CO',
      selectedCondition: '',
      selectedIcon: '',
      selectedTemp: '',
      selectedHigh: '',
      selectedLow: '',
      selectedSummary: '',
      sevenHour: [],
      tenDay: []
    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/co/denver.json`)
      .then(response => response.json())
        .then(data => {
          this.updateWeatherComponents(data);
          this.setState({
            data: data,
            selectedCity: data.current_observation.display_location.city.toUpperCase(),
            selectedState: data.current_observation.display_location.state,
            selectedCondition: data.forecast.simpleforecast.forecastday[0].conditions,
            selectedIcon: data.current_observation.icon_url,
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

  updateWeatherComponents = (data) => {
    let hourlyArray = data.hourly_forecast;
    let tenDayArray = data.forecast.simpleforecast.forecastday;
    console.log(tenDayArray)
    console.log(hourlyArray)

    this.setState({
      sevenHour: hourlyArray,
      tenDay: tenDayArray
    })
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
          this.updateWeatherComponents(data);
          this.setState({
            data: data,
            selectedCity: data.current_observation.display_location.city.toUpperCase(),
            selectedState: data.current_observation.display_location.state,
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

  // 7 hour info
  /* // data.hourly_forecast = array of 36 hour objects, [0] = current hour
  // The hour
      data.hourly_forecast[0].FCTTIME.civil = '7:00 PM'

  // Image reflecting the weather
      data.hourly_forecast[0].icon_url 
  // The projected temp
      data.hourly_forecast[0].temp.english = '95.9' 
  */


  // 10 day info
  /* data.forecast.simpleforecast.forecastday = array of 10 day objects
  // Name of day
      data.forecast.simpleforecast.forecastday[0].date.weekday = 'Thursday'
  // Image that reflects the weather
      data.forecast.simpleforecast.forecastday[0].icon_url
  // the projected high and low temps
      data.forecast.simpleforecast.forecastday[0].high.fahrenheit = '103'
      data.forecast.simpleforecast.forecastday[0].low.fahrenheit = '67'
  */

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
         currentIcon={this.state.selectedIcon}
         currentTemp={this.state.selectedTemp}
         currentHigh={this.state.selectedHigh}
         currentLow={this.state.selectedLow}
         summary={this.state.selectedSummary}
        />
        <SevenHour hourlyArray={this.state.sevenHour} />
        <TenDay tenDayArray={this.state.tenDay} />
      </div>
    );
  }
}

export default App;
