import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userCityInput: '',
      userStateInput: ''
    }
  } // end of constructor

  render() {
    return (
      <form className="Search" onSubmit={ (e) => {
        e.preventDefault();
        this.props.updateCity(this.state.userCityInput)
        this.setState({
          userCityInput: '',
          userStateInput: ''
        })
      }}>
        <input 
          type="text" 
          value={this.state.userCityInput}
          placeholder="CITY"
          onChange={ (e) => {
            this.setState({ 
              userCityInput: e.target.value
            })
          }}
        />
        <input 
        className="state-input"
        type="text"
        maxLength="2"
        value={this.state.userStateInput}
        placeholder="STATE"
        onChange={ (e) => {
          this.setState({
            userStateInput: e.target.value
          })
        }}
        />
        <button>Submit</button>
      </form>
    )
  }
} // end of class




