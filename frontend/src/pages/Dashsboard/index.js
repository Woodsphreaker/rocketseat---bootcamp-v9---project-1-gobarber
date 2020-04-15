import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Container } from './styles';

export default function Dashsboard() {
  const history = useHistory()

  return (
    <>
      <h1>Dash</h1>
      <button type="button" onClick={() => history.push('/dash')}>
        Go to Dash
      </button>
    </>
  )
}
