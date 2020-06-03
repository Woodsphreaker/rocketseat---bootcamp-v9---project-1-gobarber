import React from 'react'
import { useSelector } from 'react-redux'

import Routes from './index'

const WrapperRoutes = () => {
  const { signed } = useSelector((state) => state.Auth)
  return <Routes signed={signed} />
}

export default WrapperRoutes
