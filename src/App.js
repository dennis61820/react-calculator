import { useReducer } from 'react'
import './App.css'
import DigitButton from './DigitButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}
export function reducer(state, { type, payload }) {
  if (type === ACTIONS.ADD_DIGIT) {
    return {
      ...state,
      currentOperand: `${state.currentOperand || ''}${payload.digit}`,
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {})
  return (
    <div className='calculator-grid'>
      <div className='output' id='display'>
        <div className='previous-operand'>
          {state.previousOperand} {state.operation}
        </div>
        <div className='current-operand'>{state.currentOperand}</div>
      </div>
      <button className='span-two' id='clear'>
        AC
      </button>
      <button className='delete'>DEL</button>
      <button id='divide' className='operator'>
        ÷
      </button>
      <DigitButton digit='1' dispatch={dispatch} id='one' />
      <DigitButton digit='2' dispatch={dispatch} id='two' />
      <DigitButton digit='3' dispatch={dispatch} id='three' />
      <button id='multiply' className='operator'>
        *
      </button>
      <DigitButton digit='4' dispatch={dispatch} id='four' />
      <DigitButton digit='5' dispatch={dispatch} id='five' />
      <DigitButton digit='6' dispatch={dispatch} id='six' />
      <button id='add' className='operator'>
        +
      </button>
      <DigitButton digit='7' dispatch={dispatch} id='seven' />
      <DigitButton digit='8' dispatch={dispatch} id='eight' />
      <DigitButton digit='9' dispatch={dispatch} id='nine' />
      <button id='subtract' className='operator'>
        -
      </button>
      <DigitButton digit='.' dispatch={dispatch} id='decimal' />
      <DigitButton digit='0' dispatch={dispatch} id='zero' />
      <button id='equals' className='span-two'>
        =
      </button>
    </div>
  )
}

export default App
