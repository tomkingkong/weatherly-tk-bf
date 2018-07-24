import React, { Component } from 'react';

import './Search.css'
const { capData } = require('./cities.js')
const { Trie } = require('@tomkingkong/location-search');

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocInput: '',
      suggestions: []
    }

    this.locTrie = new Trie();
    this.locTrie.populate(capData)
  }

  returnError = () => {
    const { ifError, loc } = this.props;

    if (ifError) return <h3>{loc} could not be found :( Please enter a different location</h3>

    return;
  }

  render() {
    const { userLocInput } = this.state;

    return (
      <form className="Search" onSubmit={ (e) => {
        e.preventDefault();
        this.props.updateLocation(userLocInput)
        this.setState({
          userLocInput: ''
        })
      }}>
        <input 
          type="text" 
          value={userLocInput}
          placeholder="CITY, STATE / ZIP"
          onChange={ (e) => {
          
            console.log(this.locTrie)

            this.setState({ 
              userLocInput: e.target.value.toUpperCase()
            })
          }}
        />
        <button>Submit</button>
        { this.returnError() }
      </form>
    )
  }
}




