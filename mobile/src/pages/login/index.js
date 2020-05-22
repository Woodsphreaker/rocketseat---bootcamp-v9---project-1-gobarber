import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// import { Container } from './styles';

const login = (props) => {
  const { navigation } = props
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>Goto Dash</Text>
      </TouchableOpacity>
    </View>
  )
}

export default login
