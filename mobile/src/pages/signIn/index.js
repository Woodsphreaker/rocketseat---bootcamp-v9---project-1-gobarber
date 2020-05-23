import React from 'react'
import { View } from 'react-native'
import Background from '~/components/LinearGradient'

import Input from '~/components/Input'
import Button from '~/components/Button'

// import { Container } from './styles';

const signIn = () => {
  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <View>
        <Input iconName="person" placeholder="Digite seu Nome" />
        <Input iconName="call" placeholder="Digite seu Telefone" />
        <Button loading={false}>Login</Button>
      </View>
    </Background>
  )
}

export default signIn
