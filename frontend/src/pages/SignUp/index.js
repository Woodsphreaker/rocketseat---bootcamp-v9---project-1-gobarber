import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import Logo from '~/assets/img/logo.svg'

export default function SignUp() {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  return (
    <>
      <img alt="GoBarber" src={Logo} />
      <Form onSubmit={handleSubmit}>
        <Input name="nome" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/">Já tenho cadastro</Link>
      </Form>
    </>
  )
}
