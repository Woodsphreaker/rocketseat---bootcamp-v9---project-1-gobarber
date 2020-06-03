import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import './config/reactotronConfig'
import WrapperRoutes from './routes/wrapperRoutes'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '~/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <WrapperRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
