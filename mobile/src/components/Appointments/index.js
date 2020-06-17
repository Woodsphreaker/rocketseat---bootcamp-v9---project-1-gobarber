import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { Container, Left, Avatar, Info, Name, Time } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Appointments = ({ appointment }) => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/avatar.png' }}
        />
        <Info>
          <Name>Carlo Enrico</Name>
          <Time>em 2 Horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => Alert.alert('test', 'hello')}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  )
}

export default Appointments
