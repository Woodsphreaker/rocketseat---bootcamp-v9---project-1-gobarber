import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// Layouts
import AuthLayout from '~/pages/_layouts/Auth'
import DefaultLayout from '~/pages/_layouts/Default'

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const logged = useSelector((state) => state.Auth.signed)

  if (isPrivate && !logged) {
    return <Redirect to="/" />
  }

  if (!isPrivate && logged) {
    return <Redirect to="dash" />
  }

  const Layout = logged ? DefaultLayout : AuthLayout

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
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
