import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducers'
import rootSaga from './modules/rootSaga'
import persistReducer from './persistReducer'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const enhancer = __DEV__
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware)

const store = createStore(persistReducer(rootReducer), enhancer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
