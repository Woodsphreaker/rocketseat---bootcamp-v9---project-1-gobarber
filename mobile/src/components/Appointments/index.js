import React, { useMemo } from 'react'
import { TouchableOpacity, Alert } from 'react-native'

import { parseISO, formatRelative } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Container, Left, Avatar, Info, Name, Time } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Appointments = ({ appointment, handleCancelApointment }) => {
  const {
    id,
    date,
    past,
    cancelable,
    provider: {
      name,
      avatar: { url },
    },
  } = appointment

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(date), new Date(), {
      locale: pt,
      addSuffix: true,
    })
  }, [date])

  console.log(past)

  return (
    <Container past={past}>
      <Left>
        <Avatar
          source={{
            uri: url
              ? url.replace(/localhost/, '10.0.2.2')
              : 'http://www.pokemongo.com/assets/images/share-image.png',
          }}
        />
        <Info>
          <Name>{name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {cancelable && (
        <TouchableOpacity onPress={() => handleCancelApointment(id)}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  )
}

export default Appointments
