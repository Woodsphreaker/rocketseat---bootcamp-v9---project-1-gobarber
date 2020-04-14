import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '~/store/modules/mod1/actions'

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

const SignUp = (props) => {
  const { Add, Remove } = props

  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  const handleClick = (action) => {
    action({ newData: 1 })
    // const { dispatch } = props
    // dispatch({
    //   type: action,
    //   newValue: 1,
    // })
  }

  return (
    <>
      {JSON.stringify(props.Mod1)}
      <img alt="GoBarber" src={Logo} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <button type="button" onClick={() => handleClick(Add)}>
          Redux Action ADD
        </button>
        <button type="button" onClick={() => handleClick(Remove)}>
          Redux Action Remove
        </button>
        <Link to="/">Já tenho cadastro</Link>
      </Form>
    </>
  )
}

const mapStateToProps = (state) => ({
  Mod1: state.Mod1,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
