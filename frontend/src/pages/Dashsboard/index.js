import React, { useState, useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {
  format,
  subDays,
  addDays,
  parseISO,
  getHours,
  setHours,
  isBefore,
} from 'date-fns'
import { pt } from 'date-fns/locale'
import api from '~/services/api'
import { Container, CardsContainer, Card } from './styles'

export default function Dashsboard() {
  // const history = useHistory()
  const [date, setDate] = useState(new Date())
  const [schedulesList, setSchedulesList] = useState([])
  const dateFormated = useMemo(() => {
    return format(date, "d 'de' MMMM 'de' yyyy", { locale: pt })
  }, [date])

  const handlePreviousDay = () => {
    return setDate(subDays(date, 1))
  }

  const handleNextDay = () => {
    return setDate(addDays(date, 1))
  }

  const formatSchedulesList = (schedules) => {
    const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const mapSchedules = schedules.reduce((acc, schedule) => {
      acc.set(getHours(parseISO(schedule.date)), schedule)
      return acc
    }, new Map())

    const formatedSchedules = range.map((hour) => {
      const foundScheduleInRange = mapSchedules.get(Number(hour))

      if (foundScheduleInRange) {
        const {
          date: scheduleDate,
          user: { name },
        } = foundScheduleInRange

        const ISODate = parseISO(scheduleDate)
        return {
          scheduleHour: `${hour}:00`,
          name,
          past: isBefore(ISODate, new Date()),
        }
      }

      return {
        scheduleHour: `${hour}:00`,
        name: 'Disponível',
        past: isBefore(setHours(date, hour), new Date()),
        available: true,
      }
    })
    return formatedSchedules
  }

  useEffect(() => {
    const getSchedules = async () => {
      const { data: schedules } = await api.get('/schedules', {
        params: { date },
      })

      setSchedulesList(formatSchedulesList(schedules))
    }

    getSchedules()
  }, [date])

  return (
    <>
      <Container>
        <header>
          <button type="button" onClick={handlePreviousDay}>
            <MdChevronLeft size={36} color="#fff" />
          </button>
          <span>{dateFormated}</span>
          <button type="button" onClick={handleNextDay}>
            <MdChevronRight size={36} color="#fff" />
          </button>
        </header>
        <CardsContainer>
          {schedulesList.map((schedule) => {
            const { scheduleHour, name, available, past } = schedule
            return (
              <Card available={available} past={past}>
                <strong>{scheduleHour}</strong>
                <span>{name}</span>
              </Card>
            )
          })}
        </CardsContainer>
      </Container>
    </>
  )
}
