import React from 'react'
import { Text } from 'react-native'

import Background from '~/components/LinearGradient'

import { Container } from './styles'

const profile = () => {
  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Text>Profile</Text>
      </Container>
    </Background>
  )
}

export default profile
