import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from '../pages/login'
import Dashboard from '../pages/dashboard'

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Dashboard: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: 'Login',
  },
)

export default createAppContainer(Routes)
