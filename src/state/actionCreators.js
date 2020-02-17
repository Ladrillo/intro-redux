import * as types from './actionTypes'
import uuid from 'uuid'

// action creators
export function changeInput({ inputName, inputValue }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { inputName, inputValue }
  }
}

export function addFriend({ fname, lname }) {
  const newFriend = {
    id: uuid(),
    fname,
    lname,
    married: false,
  }

  return {
    type: types.ADD_FRIEND,
    payload: newFriend,
  }
}

export function markFriendMarried(id) {
  return {
    type: types.MARK_FRIEND_MARRIED,
    payload: id,
  }
}
