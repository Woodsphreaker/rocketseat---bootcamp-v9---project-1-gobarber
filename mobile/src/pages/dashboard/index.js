import React, { useState, useEffect } from 'react'

import { Alert } from 'react-native'
import api from '~/services/api'

import Background from '~/components/LinearGradient'
import Appointments from '~/components/Appointments'

import { Container, Title, List } from './styles'

const dashboard = (props) => {
  const { navigation } = props
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const appointments = await api.get('/appointments')
        console.log(appointments)
      } catch (error) {
        Alert.alert('error', JSON.stringify(error))
      }
    }

    getAppointments()
  }, [])

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Appointments appointment={item} />}
        />
      </Container>
    </Background>
  )
}

export default dashboard
