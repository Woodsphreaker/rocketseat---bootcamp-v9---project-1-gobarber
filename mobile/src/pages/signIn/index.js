import React from 'react'

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

const SignIn = (props) => {
  const { navigation } = props

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
          />
          <TextInput
            iconName="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <SubmitButton loading={false}>Login</SubmitButton>
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