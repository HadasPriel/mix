import { combineReducers } from 'redux'
import { wapReducer } from './wapReducer'
// import { userReducer } from './userReducer'
import { systemReducer } from './systemReducer'

export const rootReducer = combineReducers({
  systemModule: systemReducer,
  wapModule: wapReducer,
  // userModule: userReducer
})
