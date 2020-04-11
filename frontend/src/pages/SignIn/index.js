import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '~/assets/img/logo.svg'

export default function SignIn() {
  return (
    <>
      <img alt="GoBarber" src={Logo} />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Não tenho cadastro</Link>
      </form>
    </>
  )
}
