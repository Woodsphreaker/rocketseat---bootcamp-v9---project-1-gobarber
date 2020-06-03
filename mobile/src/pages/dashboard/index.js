import React, { useState } from 'react'

import Background from '~/components/LinearGradient'
import Apointments from '~/components/Apointments'

import { Container, Title, List } from './styles'

const dashboard = (props) => {
  const { navigation } = props

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  return (
    <Background colors={['#7159c1', '#ab59c1']} flexSize={1}>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Apointments apointment={item} />}
        />
      </Container>
    </Background>
  )
}

export default dashboard
