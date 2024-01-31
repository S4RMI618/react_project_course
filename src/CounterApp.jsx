import PropTypes from "prop-types";
import React, { useState } from 'react'
import { findLongerWord, getCorrectValue, filterDuplicatedNumbers, countRepeatedWords, isPalindrome } from "./exercise";

const phraseToFindLongerWord = "JavaScript es un lenguaje de programación poderoso y versátil."
const listOfValues= [null, 1, 'juan', undefined, 0, false, true]
const listOfNumbers = [[1, 2, 5], [[3, 4]], [1, [2, 4, 6, 10]]]
const phraseToCountWordsRepeated = "Feliz feliz cumpleaños a mi querido amigo Juan. Espero que tengas un día muy feliz y lleno de alegría. Feliz cumpleaños."
const phrasePalindrome = "Anita lava la tina"
console.clear();

findLongerWord(phraseToFindLongerWord)
getCorrectValue(listOfValues)
filterDuplicatedNumbers(listOfNumbers)
countRepeatedWords(phraseToCountWordsRepeated)
isPalindrome(phrasePalindrome)









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