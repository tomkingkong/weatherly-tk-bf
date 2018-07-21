import React from 'react';

const Handler = (props) => {
  return (

    props.updateSevenHour(props.promise.current_observation.display_location.city)
  )
}

export default Handler;