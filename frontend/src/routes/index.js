import React from 'react'
import { Switch, Route } from 'react-router-dom'

import RouteWrapper from './RouteWrapper'

import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'
import Dashboard from '~/pages/Dashsboard'
import Profile from '~/pages/Profile'

const Routes = () => (
  <Switch>
    <RouteWrapper path="/" exact component={SignIn} />
    <RouteWrapper path="/register" exact component={SignUp} />
    <RouteWrapper path="/dash" exact component={Dashboard} isPrivate />
    <RouteWrapper path="/profile" exact component={Profile} isPrivate />
    <Route path="*" render={() => <h1>Not Found</h1>} />
  </Switch>
)

export default Routes
