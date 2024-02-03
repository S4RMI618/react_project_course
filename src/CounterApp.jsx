import PropTypes from "prop-types";
import React, { useState } from 'react'


export const CounterApp = ( { value } ) => {

  const [counter, setCounter]  = useState(value)

  const handleSum  = () => {
    setCounter(counter + 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  const handleRest  = () => {
    counter > 0 ? setCounter(counter - 1) : counter
  }
  
  console.log("Hola Test")

  return (
    <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button onClick={handleSum}> +1 </button>
        <button onClick={handleRest} > -1 </button>
        <button onClick={handleReset} > Reset </button>
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