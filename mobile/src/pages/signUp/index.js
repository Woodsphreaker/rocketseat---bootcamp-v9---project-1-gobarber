import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Background from '~/components/LinearGradient'
import logo from '~/assets/logo.png'
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

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

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
          />
          <TextInput
            iconName="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            onSubmitEditing={() => gotoPage('SignIn')}
            ref={inputPasswordRef}
          />
          <SubmitButton loading={false}>Cadastrar</SubmitButton>
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
