import React, { useReducer } from 'react'
import uuid from 'uuid'
import './App.css'

const someId = uuid()
const anotherId = uuid()

// STEP-1 think about application state
const initialState = {
  formValues: {
    fname: '',
    lname: '',
  },
  friends: [
    { id: someId, fname: 'Jane', lname: 'Doe', married: false },
    { id: anotherId, fname: 'john', lname: 'Smith', married: false },
  ],
  favFriendId: someId,
}

// STEP-2 think of all action types that might be necessary
const INPUT_CHANGE = 'INPUT_CHANGE'
const ADD_FRIEND = 'ADD_FRIEND'
const MARK_FRIEND_MARRIED = 'MARK_FRIEND_MARRIED'

// STEP-3 build a reducer
function reducer(state, action) {
  switch (action.type) {
    case MARK_FRIEND_MARRIED:
      return {
        ...state,
        friends: state.friends.map(fr => {
          const friendId = action.payload
          if (fr.id === friendId) {
            return { ...fr, married: true }
          }
          return fr
        })
      }
    case ADD_FRIEND: {
      const newFriend = action.payload
      return {
        ...state,
        formValues: { fname: '', lname: '' },
        friends: [...state.friends, newFriend]
      }
    }
    case INPUT_CHANGE:
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [inputName]: inputValue,
        }
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = event => {
    const inputName = event.target.name
    const inputValue = event.target.value
    dispatch({ type: INPUT_CHANGE, payload: { inputName, inputValue } })
  }

  const onSubmit = event => {
    event.preventDefault()
    const newFriend = {
      id: uuid(),
      fname: state.formValues.fname,
      'lname': state.formValues.lname,
    }
    dispatch({ type: ADD_FRIEND, payload: newFriend })
  }
  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a new friend (married defaults to false)</h4>
      <form className='form' onSubmit={onSubmit}>
        <label>first name
        <input
            value={state.formValues.fname}
            onChange={onChange}
            name='fname'
          />
        </label><br />

        <label>last name
        <input
            value={state.formValues.lname}
            onChange={onChange}
            name='lname'
          />
        </label><br />

        <input type='submit' />
      </form>

      {/* list of current friends */}
      <h4>My friends:</h4>
      {
        state.friends.map(fr => (
          <div
            key={fr.id}
          >
            {fr.fname} {fr.lname} is{fr.married ? ' happily ' : ' NOT '}married
            <button onClick={evt => {
              dispatch({ type: MARK_FRIEND_MARRIED, payload: fr.id })
            }}>Mark Married</button>
            <button onClick={Function.prototype}>Fav</button>
          </div>
        ))
      }

      {/* my current favorite friend */}
      <h4 className='fav'>My favorite friend is {
        state.friends
          .find(fr => fr.id === state.favFriendId)
          .fname
      }</h4>
    </div>
  )
}
