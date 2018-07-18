import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Search from './Search.js'
import Card from './Card.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Card />
      </div>
    );
  }
}

export default App;
