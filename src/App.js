import React from 'react'
// STEP-9 BRING IN THE ACTION CREATORS
import './App.css'

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state
  formValues = { fname: '', lname: '' },
  friends = [],
  // B- callbacks to change state (action creators)
  changeInput = Function.prototype,
  addFriend = Function.prototype,
  markFriendMarried = Function.prototype,
  // C- props actually injected by the parent component
}) {
  // Event listeners (we still need 'em)
  const onChange = event => {
    // get the interesting stuff from the event
    // call an action creator that comes through props
  }
  const onSubmit = event => {
    // use the event to prevent an undesirable reload
    // call an action creator that comes through props
  }
  const onMarkFriendMarried = id => event => {
    // call an action creator
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

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
export default App
