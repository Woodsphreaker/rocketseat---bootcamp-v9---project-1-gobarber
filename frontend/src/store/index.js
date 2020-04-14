import { createStore } from 'redux'

import RootReducer from './modules/rootReducers'

const store = createStore(RootReducer)

export default store
