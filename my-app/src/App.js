import React, { Component } from 'react';

import './App.css';
import Key from './Key';
import Header from './Header';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import { returnWeatherData } from './Helper';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: 'DENVER',
      selectedState: 'CO',
      currWeatherObj: {},
      hourlyArray: [],
      tenDayArray: []
    }
  }

  componentDidMount() {
    let currState = this.state.selectedState;
    let currCity = this.state.selectedCity;
    let weatherDataObj;

    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${currState}/${currCity}.json`)
    .then(response => response.json())
    .then(data => {
      weatherDataObj = returnWeatherData(data)
      this.setState({
        currWeatherObj: weatherDataObj.currWeatherObj,
        hourlyArray: weatherDataObj.hourlyArray,
        tenDayArray: weatherDataObj.tenDayArray
      })
    })
    .catch(error => { throw new Error(error) });
  }

  updateLocation = (city, state) => {
    let newCity = city;
    let newState = state;
    let weatherDataObj;

    this.setState({
      selectedCity: newCity,
      selectedState: newState
    })

    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${newState}/${newCity}.json`)
    .then(response => response.json())
    .then(data => {
      weatherDataObj = returnWeatherData(data);
      this.setState({
        currWeatherObj: weatherDataObj.currWeatherObj,
        hourlyArray: weatherDataObj.hourlyArray,
        tenDayArray: weatherDataObj.tenDayArray
      })
    })
    .catch(error => { throw new Error(error) });

  }

  render() {
    const { currWeatherObj, hourlyArray, tenDayArray } = this.state
    
    return (
      <div className="App">
        <Header />
        <Search updateLocation={this.updateLocation}/>
        <CurrentWeather currWeatherObj={currWeatherObj} />
        <SevenHour hourlyArray={hourlyArray} />
        <TenDay tenDayArray={tenDayArray} />
      </div>
    );
  }
}

export default App;
