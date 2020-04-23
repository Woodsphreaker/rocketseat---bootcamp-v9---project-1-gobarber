import React, { useState, useEffect, useCallback } from 'react'
import { MdNotifications } from 'react-icons/md'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

import api from '~/services/api'

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles'

export default function Notifications() {
  const [visible, setVisible] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [hasUnread, setHasUnread] = useState(false)

  const handleToggleVisible = () => {
    setVisible(!visible)
  }

  const prepareData = (notificationsData) => {
    return notificationsData.map((notification) => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true, locale: pt }
      ),
    }))
  }

  const hasUnreadNotifications = (notificationsData) => {
    return notificationsData.some(({ read }) => !read)
  }

  const getNotifications = useCallback(async () => {
    try {
      const { data } = await api.get('notifications')
      const formatedData = prepareData(data)
      setNotifications(formatedData)
      setHasUnread(hasUnreadNotifications(data))
    } catch (error) {
      console.tron.error(error)
    }
  }, [])

  const handleNotificationRead = async (notificationID) => {
    try {
      await api.put(`notifications/${notificationID}`)
      getNotifications()
    } catch (error) {
      console.tron.errror(error)
    }
  }

  useEffect(() => {
    getNotifications()
  }, [getNotifications])

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((el) => {
            const { _id: notificationID, read, content, timeDistance } = el
            return (
              <Notification
                unread={!read}
                key={`notification-${notificationID}`}
              >
                <p>{content}</p>
                <time>{timeDistance}</time>
                {!read && (
                  <button
                    type="button"
                    onClick={() => handleNotificationRead(notificationID)}
                  >
                    Marcar como lida
                  </button>
                )}
              </Notification>
            )
          })}
        </Scroll>
      </NotificationList>
    </Container>
  )
}
