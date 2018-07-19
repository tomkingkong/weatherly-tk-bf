import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Search from './Search.js'
<<<<<<< HEAD
import CurrentWeather from './CurrentWeather.js'
import Key from './Key.js'

=======
import CurrentWeather from './CurrentWeather.js';
import Key from './Key.js'
>>>>>>> b317531c1fe2a820267d7aeff89e9f66365a2b8e



class App extends Component {
<<<<<<< HEAD
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {
    let city = 'Denver';
    fetch(`http://api.wunderground.com/api/${Key}/conditions/q/co/${city}.json`) //add user input in place of Denver.
    .then(response => response.json()).then(data => console.log(data));
  }

=======

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/q/co/Denver.json`) //add user input in place of Denver.
    .then(response => response.json()).then(data => console.log(data));
  }


>>>>>>> b317531c1fe2a820267d7aeff89e9f66365a2b8e
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
