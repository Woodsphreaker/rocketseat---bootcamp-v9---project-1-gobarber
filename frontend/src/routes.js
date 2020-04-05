import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={() => <h1>Home</h1>} />
    </Switch>
  </Router>
)

export default Routes
