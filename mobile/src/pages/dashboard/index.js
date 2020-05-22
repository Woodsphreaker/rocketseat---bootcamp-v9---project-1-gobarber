import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// import { Container } from './styles';

const dashboard = (props) => {
  const { navigation } = props

  return (
    <View>
      <Text>Dash</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Goto Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default dashboard
