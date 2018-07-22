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
    const { userLocInput } = this.state
    
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
            this.setState({ 
              userLocInput: e.target.value.toUpperCase()
            })
          }}
        />
        <button>Submit</button>
        <h3>{userLocInput} could not be found :( Please enter a different location</h3>
      </form>
      
    )
  }
} // end of class




