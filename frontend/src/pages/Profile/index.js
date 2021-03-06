import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import AvatarInput from './AvatarInput'
import { Container, Content } from './styles'
import { profileUpdateRequest, signOut } from '~/store/modules/user/actions'

const FormSchema = Yup.object().shape({
  name: Yup.string().required('O nome é um campo requerido'),
  email: Yup.string()
    .email('O e-mail informado não é válido')
    .required('O e-mail é um campo requerido'),
  oldPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
  avatar_id: Yup.number(),
})

export default function Profile() {
  const profile = useSelector((state) => state.User.profile)
  const dispatch = useDispatch()

  const handleSubmit = (formContents) => {
    dispatch(profileUpdateRequest(formContents))
  }

  return (
    <>
      <Container>
        <Content>
          <Form
            initialData={profile}
            schema={FormSchema}
            onSubmit={handleSubmit}
          >
            <AvatarInput name="avatar_id" />
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
          <button type="button" onClick={() => dispatch(signOut())}>
            Sair do Gobarber
          </button>
        </Content>
      </Container>
    </>
  )
}
