import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '~/routes'
import history from '~/services/history'
import GlobalStyles from '~/styles/globalStyles'
import store from '~/store'

import '~/config/ReactotronConfig'

const App = () => (
  <>
    <Provider store={store}>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </>
)

export default App
