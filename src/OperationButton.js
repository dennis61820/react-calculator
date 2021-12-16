import { ACTIONS } from './App'

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      id={
        operation === '+'
          ? 'add'
          : operation === '-'
          ? 'subtract'
          : operation === '*'
          ? 'multiply'
          : operation === '÷'
          ? 'divide'
          : null
      }
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
