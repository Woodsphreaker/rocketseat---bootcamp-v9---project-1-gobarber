import React, { useState, useRef } from 'react'
import { Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import Background from '~/components/LinearGradient'
import logo from '~/assets/logo.png'
import { signInRequest } from '~/store/modules/auth/actions'

import {
  Container,
  Form,
  Image,
  TextInput,
  SubmitButton,
  SignLink,
} from './styles'

const SignIn = (props) => {
  const { navigation } = props
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const inputPasswordRef = useRef()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.Auth.loading)

  const schema = Yup.object().shape({
    emailInput: Yup.string()
      .email('Insira um email válido')
      .required('O e-mail é um campo requerido'),
    passwordInput: Yup.string().required('Insira sua senha'),
  })

  const handleSubmit = async () => {
    const fields = {
      emailInput,
      passwordInput,
    }
    try {
      await schema.validate(fields, { abortEarly: false })
      dispatch(signInRequest(emailInput, passwordInput))
    } catch (error) {
      const errorMessages = error.errors.join('\n')
      Alert.alert('Error', errorMessages)
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
            iconName="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize={false}
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => inputPasswordRef.current.focus()}
            onChangeText={(text) => setEmailInput(text)}
          />
          <TextInput
            iconName="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={inputPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => gotoPage('SignUp')}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <SubmitButton onPress={handleSubmit} loading={isLoading}>
            Login
          </SubmitButton>
          <SignLink onPress={() => gotoPage('SignUp')}>
            Criar conta gratuita
          </SignLink>
        </Form>
      </Container>
    </Background>
  )
}

export default SignIn

SignIn.propTypes = {
  navigation: PropTypes.object,
}

SignIn.defaultProps = {
  navigation: {},
}
