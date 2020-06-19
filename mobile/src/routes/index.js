import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Dashboard from '~/pages/dashboard'
import Profile from '~/pages/profile'
import SignIn from '~/pages/signIn'
import SignUp from '~/pages/signUp'
import Playground from '~/pages/playground'

import Icon from 'react-native-vector-icons/MaterialIcons'

const AuthenticatedRoutes = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: 'Agendamentos',
        tabBarIcon: <Icon name="event" size={20} color="#fff" />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Meu Perfil',
        tabBarIcon: <Icon name="person" size={20} color="#fff" />,
      },
    },
  },
  {
    initialRouteName: 'Profile',
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255,255,255,0.6)',
      style: {
        backgroundColor: '#8d41a8',
      },
    },
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

const Routes = ({ signed = false }) => {
  const Route = createAppContainer(signed ? AuthenticatedRoutes : CommonRoutes)

  return <Route />
}

export default Routes
