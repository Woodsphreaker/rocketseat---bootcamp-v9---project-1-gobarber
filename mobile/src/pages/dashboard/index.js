import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import { Container } from './styles';

import Background from '~/components/LinearGradient'

const dashboard = (props) => {
  const { navigation } = props

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <View>
        <Text>Dash</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Goto Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default dashboard
