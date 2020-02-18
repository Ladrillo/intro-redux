import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// STEP-1 DESIGN APPLICATION STATE
// {
//   formValues: {       // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [          // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
//   numberOfFriends: 3, // SLICE 3 BAD BAD BAD BAD!!!!!!!! this can be computed from slice 2
// }

// STEP-4 USE combineReducers FROM redux TO MAKE A SINGLE REDUCER

// STEP-5 USE createStore FROM redux TO MAKE A STATE STORE

ReactDOM.render(
  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM react-redux
  <App />
  , document.getElementById('root'))
