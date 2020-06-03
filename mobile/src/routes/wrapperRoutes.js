import React from 'react'
import { useSelector } from 'react-redux'

import LoadRoutes from './index'

const WrapperRoutes = () => {
  const { signed } = useSelector((state) => state.Auth)

  const Routes = LoadRoutes(signed)

  return <Routes />
}

export default WrapperRoutes
