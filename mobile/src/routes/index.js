import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

import Login from '~/pages/login'
import Dashboard from '~/pages/dashboard'
import SignIn from '~/pages/signIn'
import SignOut from '~/pages/signOut'

const Routes = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Dashboard: {
      screen: Dashboard,
    },
    SignIn: {
      screen: SignIn,
    },
    SignOut: {
      screen: SignOut,
    },
  },
  {
    initialRouteName: 'Login',
  },
)

export default createAppContainer(Routes)
