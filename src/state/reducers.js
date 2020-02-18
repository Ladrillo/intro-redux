import * as types from './actionTypes'

// {
//   formValues: { // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [    // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
// }

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { fname: '', lname: '' }
export function formReducer(state = initialStateForm, action) {
  debugger
  // console.log(state)   // { fname: 'Blake', lname: 'S' }
  // console.log(action)  // { type: "INPUT_CHANGE", payload: { inputName: "lname", inputValue: "Sm" } }

  // switch

  return state
}

const initialStateFriends = []
export function friendsReducer(state = initialStateFriends, action) {

  // switch

  return state
}
