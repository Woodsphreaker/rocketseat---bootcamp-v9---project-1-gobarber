import 'react-native-gesture-handler'
import React from 'react'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from '~/store'

import './config/reactotronConfig'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
