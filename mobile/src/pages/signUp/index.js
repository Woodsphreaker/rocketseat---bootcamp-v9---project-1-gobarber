import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import Background from '~/components/LinearGradient'
import logo from '~/assets/logo.png'
import { signUpRequest } from '~/store/modules/auth/actions'
import {
  Container,
  Form,
  Image,
  TextInput,
  SubmitButton,
  SignLink,
} from './styles'

const SignUp = (props) => {
  const { navigation } = props
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.Auth.loading)

  const schema = Yup.object().shape({
    nameInput: Yup.string().required('O Nome é requerido'),
    emailInput: Yup.string()
      .required('O campo e-mail é obrigatório')
      .email('Insira um e-mail válido'),
    passwordInput: Yup.string()
      .required('O campo senha é obrigatório')
      .min(6, 'Sua senha deve ter no mínimo 6 caracteres'),
  })

  const handleSubmit = async () => {
    const fields = {
      nameInput,
      emailInput,
      passwordInput,
    }

    try {
      await schema.validate(fields, { abortEarly: false })
      dispatch(signUpRequest(nameInput, emailInput, passwordInput))
    } catch (error) {
      Alert.alert('Error', error.errors.join('\n'))
    }
  }

  const gotoPage = (page) => {
    navigation.navigate(page)
  }

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Image source={logo} />
        <Form>
          <TextInput
            iconName="person-outline"
            autoCorrect={false}
            autoCapitalize={false}
            placeholder="Digite seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => inputEmailRef.current.focus()}
            onChangeText={(text) => setNameInput(text)}
          />
          <TextInput
            iconName="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize={false}
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => inputPasswordRef.current.focus()}
            ref={inputEmailRef}
            onChangeText={(text) => setEmailInput(text)}
          />
          <TextInput
            iconName="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            onSubmitEditing={() => gotoPage('SignIn')}
            ref={inputPasswordRef}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <SubmitButton onPress={handleSubmit} loading={isLoading}>
            Cadastrar
          </SubmitButton>
          <SignLink onPress={() => gotoPage('SignIn')}>
            Já tenho cadastro
          </SignLink>
        </Form>
      </Container>
    </Background>
  )
}

export default SignUp

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
}
