import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '~/store/modules/mod2/actions'

import Logo from '~/assets/img/logo.svg'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O E-mail é obrigatório'),
  password: Yup.string()
    .min(5, 'A senha deve ter 5 chars')
    .required('A Senha é obrigatória'),
})

const SignIn = (props) => {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  const handleClick = (action) => {
    action({ newData: 1 })
  }

  return (
    <>
      <img alt="GoBarber" src={Logo} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Não tenho cadastro</Link>
      </Form>
    </>
  )
}

const mapStateToProps = (state) => ({
  Mod1: state.Mod1,
  Mod2: state.Mod2,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
