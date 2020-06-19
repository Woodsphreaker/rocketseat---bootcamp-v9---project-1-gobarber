import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut, profileUpdateRequest } from '~/store/modules/user/actions'

import Background from '~/components/LinearGradient'

import Button from '~/components/Button'
import {
  Container,
  Title,
  Separator,
  Form,
  TextInput,
  SubmitButton,
} from './styles'

const profile = () => {
  const dispacth = useDispatch()

  const inputPasswordRef = useRef()
  const inputEmailRef = useRef()
  const inputNewPasswordRef = useRef()
  const inputConfirmPasswordRef = useRef()

  const profile = useSelector((state) => state.User.profile)
  const [nameInput, setNameInput] = useState(profile.name)
  const [emailInput, setEmailInput] = useState(profile.email)
  const [passwordInput, setPasswordInput] = useState()
  const [newPasswordInput, setNewPasswordInput] = useState()
  const [confirmPasswordInput, setConfirmPasswordInput] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setPasswordInput('')
    setNewPasswordInput('')
    setConfirmPasswordInput('')
    setIsLoading(false)
  }, [profile])

  const handleSubmit = () => {
    setIsLoading(true)
    dispacth(
      profileUpdateRequest({
        name: nameInput,
        email: emailInput,
        oldPassword: passwordInput,
        password: newPasswordInput,
        confirmPassword: confirmPasswordInput,
      }),
    )
  }

  const gotoPage = () => {}

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Title>Meu Perfil</Title>

        <Form>
          <TextInput
            value={nameInput}
            iconName="person-outline"
            autoCorrect={false}
            autoCapitalize={false}
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => inputEmailRef.current.focus()}
            onChangeText={(text) => setNameInput(text)}
          />
          <TextInput
            value={emailInput}
            iconName="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize={false}
            ref={inputEmailRef}
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => inputPasswordRef.current.focus()}
            onChangeText={(text) => setEmailInput(text)}
          />

          <Separator />

          <TextInput
            value={passwordInput}
            iconName="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={inputPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => inputNewPasswordRef.current.focus()}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <TextInput
            value={newPasswordInput}
            iconName="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={inputNewPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => inputConfirmPasswordRef.current.focus()}
            onChangeText={(text) => setNewPasswordInput(text)}
          />
          <TextInput
            value={confirmPasswordInput}
            iconName="lock-outline"
            secureTextEntry
            placeholder="Confirme sua nova senha"
            ref={inputConfirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => gotoPage('SignUp')}
            onChangeText={(text) => setConfirmPasswordInput(text)}
          />

          <SubmitButton onPress={handleSubmit} loading={isLoading}>
            Atualizar Perfil
          </SubmitButton>

          <Button
            style={{ backgroundColor: '#f64c75' }}
            onPress={() => dispacth(signOut())}>
            Sair
          </Button>
        </Form>
      </Container>
    </Background>
  )
}

export default profile
