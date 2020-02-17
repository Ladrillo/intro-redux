import React from 'react'
import * as redux from 'redux'
import * as reactRedux from 'react-redux'
import { formReducer, friendsReducer } from './state/reducers'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// STEP-4
const combinedReducer = redux.combineReducers({
  formValues: formReducer,
  friends: friendsReducer,
})

// STEP-5
const store = redux.createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  // STEP-6
  <reactRedux.Provider store={store}>
    <App />
  </reactRedux.Provider>

  , document.getElementById('root'))
