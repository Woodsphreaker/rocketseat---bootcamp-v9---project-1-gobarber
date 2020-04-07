import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashsboard'
import Profile from '../pages/Profile'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" exact component={SignUp} />
    <Route path="/dash" exact component={Dashboard} />
    <Route path="/profile" exact component={Profile} />
  </Switch>
)

export default Routes
