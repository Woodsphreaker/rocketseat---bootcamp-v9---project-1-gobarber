import React, { useState, useEffect } from 'react'
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

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Appointments appointment={item} />}
        />
      </Container>
    </Background>
  )
}

export default dashboard
