import { Platform } from 'react-native'
import styled from 'styled-components/native'
import Input from '~/components/Input'
import Button from '~/components/Button'
import Link from '~/components/Link'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`
export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`
export const TextInput = styled(Input)`
  margin-bottom: 10px;
`
export const SubmitButton = styled(Button)`
  margin-top: 20px;
`
export const SignLink = styled(Link)`
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
`

export const Image = styled.Image`
  align-self: center;
`
