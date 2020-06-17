import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, TouchableOpacity } from 'react-native'
import { signOut } from '~/store/modules/user/actions'

import Background from '~/components/LinearGradient'

import { Container } from './styles'

const profile = () => {
  const dispacth = useDispatch()

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Text>Profile</Text>
        <TouchableOpacity
          onPress={() => dispacth(signOut())}
          style={{
            backgroundColor: '#fff',
            padding: 20,
            alignItems: 'center',
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </Container>
    </Background>
  )
}

export default profile
