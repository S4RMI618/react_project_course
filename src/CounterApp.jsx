import PropTypes from "prop-types";
import React from 'react'


const handleEvent = (e) => { console.log(e)}

const CounterApp = ( { value } ) => {
  return (
    <>
        <h1>Counter App</h1>
        <h2> { value } </h2>
        <button onClick={handleEvent}
        
        > +1 </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp