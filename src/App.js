import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreators from './state/actionCreators'
import './App.css'

export function App({
  // PROPS COME IN TWO FLAVORS
  // A- data from state
  formValues = { fname: '', lname: '' },
  friends = [],
  // B- callbacks to change state (action creators)
  changeInput = Function.prototype,
  addFriend = Function.prototype,
  markFriendMarried = Function.prototype,
}) {
  // event handlers (we still need 'em)
  const onChange = event => {
    const inputName = event.target.name
    const inputValue = event.target.value
    changeInput({ inputName, inputValue })
  }
  const onSubmit = event => {
    event.preventDefault()
    const { fname, lname } = formValues
    addFriend({ fname, lname })
  }
  const onMarkFriendMarried = id => event => {
    markFriendMarried(id)
  }

  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a new friend (married defaults to false)</h4>
      <form className='form' onSubmit={onSubmit}>
        <label>first name
        <input
            value={formValues.fname}
            onChange={onChange}
            name='fname'
          />
        </label><br />

        <label>last name
        <input
            value={formValues.lname}
            onChange={onChange}
            name='lname'
          />
        </label><br />

        <input type='submit' />
      </form>

      {/* list of current friends */}
      <h4>My friends:</h4>
      {
        friends.map(fr => (
          <div
            key={fr.id}
          >
            {fr.fname} {fr.lname} is{fr.married ? ' happily ' : ' NOT '}married
            <button onClick={onMarkFriendMarried(fr.id)}>Mark Married</button>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.formValues,
    friends: state.friends,
  }
}

export default connect(
  mapStateToProps,
  actionsCreators
)(App)
