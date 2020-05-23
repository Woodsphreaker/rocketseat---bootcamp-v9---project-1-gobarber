import { combineReducers } from 'redux'

// import Mod1 from './mod1/reducer'
// import Mod2 from './mod2/reducer'
import Auth from './auth/reducer'
import User from './user/reducer'

export default combineReducers({
  Auth,
  User,
})
