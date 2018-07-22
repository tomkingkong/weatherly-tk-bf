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
      selectedLocation: 'DENVER, CO',
      currWeatherObj: {},
      hourlyArray: [],
      tenDayArray: [],
      searchError: false
    }
  }

  getStorageLocation = (storeKey) => {
    return JSON.parse(localStorage.getItem(storeKey))
  }

  setStorageLocation = (storeKey, storeItem) => {
    return localStorage.setItem(storeKey, JSON.stringify(storeItem))
  }

  updateCurrentData = (loc) => {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${loc}/.json`)
    .then(response => response.json())
    .then(data => {
      let weatherDataObj = returnWeatherData(data);
      this.setStorageLocation('savedLoc', data.current_observation.display_location.zip);
      this.setState({
        searchError: false,
        currWeatherObj: weatherDataObj.currWeatherObj,
        hourlyArray: weatherDataObj.hourlyArray,
        tenDayArray: weatherDataObj.tenDayArray
      })
    })
    .catch(error => { throw new Error(error) })
    .catch(err => {
      this.setState({
        searchError: true
      })
      console.log(err)
    })
  }

  componentDidMount() {
    let loc = this.getStorageLocation('savedLoc');

    if (!loc) {
      loc = this.state.selectedLocation;
    }

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
    const { currWeatherObj, hourlyArray, tenDayArray, searchError, selectedLocation } = this.state;
    
    return (
      <div className="App">
        <Header />
        <Search updateLocation={this.updateLocation} ifError={searchError} loc={selectedLocation} />
        <CurrentWeather currWeatherObj={currWeatherObj} />
        <SevenHour hourlyArray={hourlyArray} />
        <TenDay tenDayArray={tenDayArray} />
      </div>
    );
  }
}

export default App;
