import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import api from '~/services/api'

import Background from '~/components/LinearGradient'
import Appointments from '~/components/Appointments'

import { Container, Title, List } from './styles'

const dashboard = (props) => {
  const { navigation } = props
  const [data, setData] = useState()

  useEffect(() => {
    getAppointments()
  }, [])

  const getAppointments = async () => {
    try {
      const { data: appointments } = await api.get('/appointments')
      setData(appointments || [])
    } catch (error) {
      console.tron.log(JSON.stringify(error))
    }
  }

  const confirmCancelAppointment = (appointmentID) => {
    Alert.alert('Confirme a ação', 'Deseja cancelar este agendamento ?', [
      {
        text: 'SIM',
        onPress: () => cancelAppointment(appointmentID),
      },
      {
        text: 'NÃO',
        style: 'cancel',
      },
    ])
  }

  const cancelAppointment = async (appointmentID) => {
    try {
      await api.delete(`appointments/${appointmentID}`)
      setData(data.filter(({ id }) => id !== appointmentID))
    } catch (error) {
      Alert.alert('error')
    }
  }

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointments
              appointment={item}
              cancelAppointment={confirmCancelAppointment}
            />
          )}
        />
      </Container>
    </Background>
  )
}

export default dashboard
