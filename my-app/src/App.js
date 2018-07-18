import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Search from './Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
