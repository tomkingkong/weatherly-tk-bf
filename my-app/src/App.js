import React, { Component } from 'react';

import './App.css';
import Header from './Header.js'
import Search from './Search.js'
import CurrentWeather from './CurrentWeather.js'
import Key from './Key.js'



class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: 'Denver',
      selectedState: 'CO',
      selectedCondition: '',
      selectedTemp: '',
      selectedHigh: 0,
      selectedLow: 0,
      selectedSummary: ''

    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/q/co/denver.json`)
      .then(response => response.json())
        .then(data => console.log(data))
          .catch(error => { throw new Error(error) });
  }

  searched() {
    let city = this.state.selectedCity;
    let state = this.state.selectedState;

    fetch(`http://api.wunderground.com/api/${Key}/conditions/q/${state}/${city}.json`)
      .then(response => response.json())
        .then(data => console.log(data))
          .catch(error => { throw new Error(error) });
  }



  updateCity = (city) => {
    let newCity = city;
    this.setState({
      selectedCity: newCity
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search updateCity={this.updateCity}/>
        <CurrentWeather 
         currentCity={this.state.selectedCity}
         currentDay={this.state.selectedDay}
         currentCondition={this.state.selectedCondition}
         currentTemp={this.state.selectedTemp}
         currentHigh={this.state.selectedHigh}
         currentLow={this.state.selectedLow}
         currentSummary={this.state.selectedSummary}
        />
      </div>
    );
  }
}

export default App;
