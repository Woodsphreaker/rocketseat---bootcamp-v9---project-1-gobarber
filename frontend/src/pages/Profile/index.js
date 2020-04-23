import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { Container, Content } from './styles'

const FormSchema = Yup.object().shape({
  name: Yup.string().required('O nome é um campo requerido'),
  email: Yup.string()
    .email('O e-mail informado não é válido')
    .required('O e-mail é um campo requerido'),
})

export default function Profile() {
  const handleSubmit = (formContents) => {
    console.log(formContents)
  }

  const profile = useSelector((state) => state.User.profile)

  return (
    <>
      <Container>
        <Content>
          <Form
            initialData={profile}
            schema={FormSchema}
            onSubmit={handleSubmit}
          >
            <Input name="name" type="text" placeholder="Nome Completo" />
            <Input
              name="email"
              type="email"
              placeholder="Seu endereço de email"
            />
            <hr />
            <Input
              name="oldPassword"
              type="password"
              placeholder="Sua senha atual"
            />
            <Input name="password" type="password" placeholder="Nova Senha" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua nova senha"
            />
            <button type="submit">Atualizar Perfil</button>
          </Form>
          <button type="button">Sair do Gobarber</button>
        </Content>
      </Container>
    </>
  )
}
