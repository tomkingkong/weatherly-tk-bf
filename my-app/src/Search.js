import React, { Component } from 'react';
import './Search.css'



export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
    this.submitCity = this.submitCity.bind(this);
  } // end of constructor

  submitCity(e) {
    e.preventDefault()
    console.log(this.state.userInput);
    this.setState({
      userInput: ''
    })

  }

  render() {
    return (
      <form className="Search" onSubmit={ (e) => {
        this.submitCity(e) 
      }}>
        <input 
          type="text" 
          value={this.state.userInput}
          placeholder="Select a city..."
          onChange={ (e) => {
            this.setState({ 
              userInput: e.target.value
            })
          }}
        />
        <button>Submit</button>
      </form>
    )
  }
} // end of class




