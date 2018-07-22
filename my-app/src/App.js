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
      selectedLocation: 'ATLANTA, GA',
      currWeatherObj: {},
      hourlyArray: [],
      tenDayArray: [],
      error: false
    }
  }

  updateCurrentData = (loc) => {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${loc}/.json`)
    .then(response => response.json())
    .then(data => {
      let weatherDataObj = returnWeatherData(data);
      this.setState({
        currWeatherObj: weatherDataObj.currWeatherObj,
        hourlyArray: weatherDataObj.hourlyArray,
        tenDayArray: weatherDataObj.tenDayArray
      })
    })
    .catch(error => { throw new Error(error) });
  }

  componentDidMount() {
    let loc = this.state.selectedLocation;

    this.updateCurrentData(loc);
  }

  updateLocation = (loc) => {
    let newLoc = loc;

    this.setState({
      selectedLocation: newLoc,
    })

    this.updateCurrentData(newLoc);
  }

  render() {
    const { currWeatherObj, hourlyArray, tenDayArray } = this.state;
    
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
