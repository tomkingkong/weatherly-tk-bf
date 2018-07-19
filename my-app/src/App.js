import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Search from './Search.js'
import CurrentWeather from './CurrentWeather.js';
import Key from './Key.js'



class App extends Component {

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/q/co/Denver.json`) //add user input in place of Denver.
    .then(response => response.json()).then(data => console.log(data));
  }


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
