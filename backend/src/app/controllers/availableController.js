import Appointments from '../models/Appointments'
import {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  isAfter,
  format,
} from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Op } from 'sequelize'

const index = async (req, res) => {
  const { date } = req.query
  const { providerID } = req.params
  console.log(date)
  console.log(new Date(Number(date)))

  if (!date) {
    return res.status(400).json({ error: 'Invalid date' })
  }

  const searchDate = Number(date)

  const appointments = await Appointments.findAll({
    where: {
      provider_id: providerID,
      date: {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      },
      canceled_at: null,
    },
  })

  const schedule = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
  ]

  const available = schedule.map(time => {
    const [hour, minute] = time.split(':')
    const value = setSeconds(setMinutes(setHours(searchDate, hour), minute), 0)

    return {
      time,
      t: value,
      // eslint-disable-next-line quotes
      value: format(value, "yyyy-MM-dd'T'HH:mm:ss:xxx", { locale: pt }),
      isAvailable:
        isAfter(value, new Date()) &&
        !appointments.find(a => format(a.date, 'HH:mm') === time),
    }
  })

  res.json(available)
}

export default { index }
