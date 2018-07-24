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

  updateSuggestions = (input) => {
    let suggests = this.locTrie.getSuggestions(input)
    this.setState({
      suggestions: suggests
    })
  }

  displaySuggestions = () => {
    return this.state.suggestions.map(suggestion => <option key={suggestion} value={suggestion} />)
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
          list="locations"
          type="text" 
          value={userLocInput}
          placeholder="CITY, STATE / ZIP"
          onChange={ (e) => {
            let value = e.target.value.toUpperCase()
            let options = this.locTrie.getSuggestions(value).slice(0, 5)
            this.setState({ 
              userLocInput: value,
              suggestions: options
            })
          }}
        />
        <datalist id="locations">
          {
            this.displaySuggestions()
          }
        </datalist>
        <button>Submit</button>
        { this.returnError() }
      </form>
    )
  }
}




