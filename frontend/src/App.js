import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from '~/routes'
import history from '~/services/history'
import GlobalStyles from '~/styles/globalStyles'
import '~/config/ReactotronConfig'
import { store, persistor } from '~/store'

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  </>
)

export default App
