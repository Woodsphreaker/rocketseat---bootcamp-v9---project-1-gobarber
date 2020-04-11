import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Logo from '~/assets/img/logo.svg'

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é requerido'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O E-mail é obrigatório'),
  password: Yup.string()
    .min(5, 'A senha deve ter 5 chars')
    .required('A Senha é obrigatória'),
})

export default function SignUp() {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  return (
    <>
      <img alt="GoBarber" src={Logo} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/">Já tenho cadastro</Link>
      </Form>
    </>
  )
}
