import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'

// 1. Initial state
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Reducer
function reducer(state, action) { 
}

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
      <h1>Google translate</h1>
    </div>
  )
}

export default App
