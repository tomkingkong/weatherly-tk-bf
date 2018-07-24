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
      selectedLocation: '',
      currWeatherObj: {},
      hourlyArray: [],
      tenDayArray: [],
      searchError: false
    }
  }

  getStorageLocation = (storeKey) => {
    if (localStorage.getItem(storeKey)) {
      return JSON.parse(localStorage.getItem(storeKey));
    }
  }

  setStorageLocation = (storeKey, storeItem) => {
    return localStorage.setItem(storeKey, JSON.stringify(storeItem));
  }

  updateCurrentData = (loc) => {
    if (loc) {
      fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly10day/forecast10day/q/${loc}/.json`)
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
          searchError: true,
        })
      })
    }
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.selectedLocation !== this.state.selectedLocation) {
  //     this.updateCurrentData(this.state.selectedLocation);
  //   }
  // }

  componentDidMount() {
    let loc = this.getStorageLocation('savedLoc');

    this.setState({
      selectedLocation: loc
    })

    this.updateCurrentData(loc);
  }

  updateLocation = (loc) => {
    let newLoc = loc;

    this.setState({
      selectedLocation: newLoc,
    })

    this.updateCurrentData(newLoc)
  }

  displayPage = () => {
    const { 
      currWeatherObj, 
      hourlyArray, 
      tenDayArray, 
      searchError, 
      selectedLocation 
    } = this.state;
    
    if (selectedLocation && !searchError) {
      return (
        <React.Fragment>
          <CurrentWeather currWeatherObj={ currWeatherObj } />
          <SevenHour hourlyArray={ hourlyArray } />
          <TenDay tenDayArray={ tenDayArray } hours={ hourlyArray } />
        </React.Fragment>
      )
    }
  }

  render() {
    const { searchError, selectedLocation } = this.state;

    return (
      <div className="App">
        <Header />
        <Search 
          updateLocation={ this.updateLocation } 
          ifError={ searchError } 
          loc={ selectedLocation } 
        /> 
        {
          this.displayPage()
        }
      </div>
    );
  }
}

export default App;