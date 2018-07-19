import React, { Component } from 'react';
import './Search.css'


export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userCityInput: '',
      userStateInput: 'CO'
    }
  } // end of constructor

  render() {
    return (
      <form className="Search" onSubmit={ (e) => {
        e.preventDefault();
        this.props.updateCity(this.state.userCityInput)
        this.setState({
          userCityInput: ''
        })
      }}>
        <input 
          type="text" 
          value={this.state.userCityInput}
          placeholder="Select a city..."
          onChange={ (e) => {
            this.setState({ 
              userCityInput: e.target.value
            })
          }}
        />
        <button>Submit</button>
      </form>
    )
  }
} // end of class




