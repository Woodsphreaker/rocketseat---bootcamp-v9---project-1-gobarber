import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const RouteWrapper = ({ component: Component, isPrivate, logged, ...rest }) => {
  if (isPrivate && !logged) {
    return <Redirect to="/" />
  }

  if (!isPrivate && logged) {
    return <Redirect to="dash" />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  logged: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

RouteWrapper.defaultProps = {
  logged: false,
  isPrivate: false,
}

export default RouteWrapper
