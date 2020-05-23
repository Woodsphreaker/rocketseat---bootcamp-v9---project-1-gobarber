import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import './config/reactotronConfig'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from '~/store'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </Provider>
  )
}

export default App
