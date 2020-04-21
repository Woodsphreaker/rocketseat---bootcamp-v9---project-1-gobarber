import React from 'react'
import { MdNotifications } from 'react-icons/md'

import { Container, Badge, NotificationList, Notification } from './styles'

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        {[...Array(20)].map((el, i) => (
          <Notification unread={i === 0 || false} key={`notification-${el}`}>
            <p>Você tem um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        ))}
      </NotificationList>
    </Container>
  )
}
