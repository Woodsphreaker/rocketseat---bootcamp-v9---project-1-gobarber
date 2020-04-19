import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

// Redux
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as AuthActions from '~/store/modules/auth/actions'
import Logo from '~/assets/img/logo.svg'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é requerido'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O E-mail é obrigatório'),
  password: Yup.string()
    .min(5, 'A senha deve ter 5 chars')
    .required('A Senha é obrigatória'),
})

const SignUp = () => {
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    const { name, email, password } = data
    dispatch(AuthActions.signUpRequest(name, email, password))
  }

  return (
    <>
      <img alt="GoBarber" src={Logo} />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho cadastro</Link>
      </Form>
    </>
  )
}

export default SignUp

// const mapStateToProps = (state) => ({
//   Mod1: state.Mod1,
//   Mod2: state.Mod2,
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
