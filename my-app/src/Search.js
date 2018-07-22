import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userLocInput: ''
    }
  } // end of constructor

  render() {
    return (
      <form className="Search" onSubmit={ (e) => {
        e.preventDefault();
        this.props.updateLocation(this.state.userLocInput)
        this.setState({
          userLocInput: ''
        })
      }}>
        <input 
          type="text" 
          value={this.state.userLocInput}
          placeholder="CITY / ZIP"
          onChange={ (e) => {
            this.setState({ 
              userLocInput: e.target.value.toUpperCase()
            })
          }}
        />
        <button>Submit</button>
        <h3>{this.state.userLocInput} could not be found :( Please enter a different location</h3>
      </form>
      
    )
  }
} // end of class




