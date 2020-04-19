import React from 'react'
import { useHistory } from 'react-router-dom'
import api from '~/services/api'
// import { Container } from './styles';

export default function Dashsboard() {
  const history = useHistory()

  api.get('users')

  return (
    <>
      <h1>Dash</h1>
      <button type="button" onClick={() => history.push('/dash')}>
        Go to Dash
      </button>
    </>
  )
}
