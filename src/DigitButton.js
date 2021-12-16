import React from 'react'
import { ACTIONS } from './App'

function DigitButton({ dispatch, digit }) {
  return (
    <button
      id={
        digit === '1'
          ? 'one'
          : digit === '2'
          ? 'two'
          : digit === '3'
          ? 'three'
          : digit === '4'
          ? 'four'
          : digit === '5'
          ? 'five'
          : digit === '6'
          ? 'six'
          : digit === '7'
          ? 'seven'
          : digit === '8'
          ? 'eight'
          : digit === '9'
          ? 'nine'
          : digit === '0'
          ? 'zero'
          : digit === '0'
          ? 'zero'
          : digit === '.'
          ? 'decimal'
          : null
      }
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}

export default DigitButton
