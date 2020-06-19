import styled from 'styled-components/native'
import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`
export const Form = styled.ScrollView.attrs({})`
  align-self: stretch;
  margin-top: 10px;
  padding: 30px;
`
export const TextInput = styled(Input)`
  margin-bottom: 10px;
`
export const SubmitButton = styled(Button)`
  margin: 20px 0;
`

export const Separator = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 30px 0;
`
