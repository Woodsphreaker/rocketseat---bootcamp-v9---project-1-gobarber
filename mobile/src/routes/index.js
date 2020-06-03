import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

// import Login from '~/pages/login'
import Dashboard from '~/pages/dashboard'
import SignIn from '~/pages/signIn'
import SignUp from '~/pages/signUp'

const AuthenticatedRoutes = createSwitchNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: 'Dashboard',
  },
)

const CommonRoutes = createSwitchNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Out',
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
)

export default (authenticated) => {
  return createAppContainer(authenticated ? AuthenticatedRoutes : CommonRoutes)
}
