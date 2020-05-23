import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from '~/store'

import './config/reactotronConfig'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </Provider>
  )
}

export default App
