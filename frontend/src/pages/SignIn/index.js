import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import Logo from '~/assets/img/logo.svg'

export default function SignIn() {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  return (
    <>
      <img alt="GoBarber" src={Logo} />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Não tenho cadastro</Link>
      </Form>
    </>
  )
}
