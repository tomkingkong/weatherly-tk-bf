import React, { Component } from 'react';

import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: false
    }
  }

  toggleHours = () => {
    this.setState({
      hours: !this.state.hours
    });
  }

  displayHours = () => {
    const { hours, day } = this.props

    const hourStyles = {
      border: '1px solid cadetblue',
      textAlign: 'center',
      width: '20%'
    }
    
    return (
      hours.map((hour, i) => { 
        return (
          <li style={ hourStyles } key={ `${day}hour${i}` }>
            <p>{ hour.hour}</p>
            <img alt={ hour.condition } src={ hour.icon } />
            <p>{ `${hour.temp}°` }</p>
          </li>
        )
      })
    )
  }

  render() {
    const { 
      day, 
      hour, 
      icon, 
      temp, 
      high, 
      low, 
      condition 
    } = this.props;

    const twentyFour = {
      display: 'flex',
      overflow: 'scroll',
      listStyleType: 'none',
      alignItems: 'center',
      padding: '0',
      margin: '0 auto',
      width: '90%'
    };

    
    
    return (
      <React.Fragment>
        <article className="Card" onClick={ day && this.toggleHours } >
          { day && <div>{ day }</div> }
          { hour && <div>{ hour }</div> }
          <img alt={ condition } src={ icon } />
          { temp && <div>{ temp }</div>}
          { low && <div>{ low }{ high }</div> }
        </article>
        { this.state.hours && <ul style={ twentyFour }>{ this.displayHours() }</ul> }
      </React.Fragment>
    )
  }
}



  