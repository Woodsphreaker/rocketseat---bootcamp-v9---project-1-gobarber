import React from 'react'
import { View, Text } from 'react-native'
import Background from '~/components/LinearGradient'

// import { Container } from './styles';

const signIn = () => {
  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <View>
        <Text>Sign In</Text>
      </View>
    </Background>
  )
}

export default signIn
