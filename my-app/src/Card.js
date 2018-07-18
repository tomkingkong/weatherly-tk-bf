import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  } //end of constructor

  render() {
    
    
    return (
      <article className="Card">
        {/*<CurrentWeather />*/}
        <button>7 hour</button>
        <button>10 day</button>
        <SevenHour />
        <TenDay />

      </article>
    )
  }

} //end of class