import * as types from './actionTypes'

// reducers
const initialStateForm = { fname: '', lname: '' }
export function formReducer(formValues = initialStateForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...formValues,
        [action.payload.inputName]: action.payload.inputValue
      }
    case types.ADD_FRIEND:
      return initialStateForm
    default:
      return formValues
  }
}

const initialStateFriends = []
export function friendsReducer(friends = initialStateFriends, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return [...friends, action.payload]
    case types.MARK_FRIEND_MARRIED:
      return friends.map(fr => {
        if (action.payload === fr.id) {
          return { ...fr, married: true }
        }
        return fr
      })
    default:
      return friends
  }
}