import React from 'react';
import './SevenHour.css';


export default SevenHour = (props) => {
  return (
    <div className="SevenHour">
      <Card selectedHour={props.selectedHour} />
    </div>
  )
}