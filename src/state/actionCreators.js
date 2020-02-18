import * as types from './actionTypes'
import uuid from 'uuid'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
  return { // this is an action. What should it have?
    type: types.INPUT_CHANGE,
    payload: {
      inputName,
      inputValue,
    }
  }
}

export function addFriend() {

}

export function markFriendMarried() {

}
