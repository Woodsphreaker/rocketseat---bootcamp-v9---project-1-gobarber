import Appointment from '../models/Appointments'
import User from '../models/Users'
import File from '../models/Files'
import { startOfHour, parseISO, isBefore } from 'date-fns'
import * as Yup from 'yup'

const index = async (req, res) => {
  const { userID } = req
  const { page = 1 } = req.query

  const appointment = await Appointment.findAll({
    where: { user_id: userID, canceled_at: null },
    order: ['date'],
    attributes: ['id', 'date'],
    limit: 20, // 20 registers per page
    offset: (page - 1) * 20,
    include: [
      {
        model: User,
        attributes: ['id', 'name'],
        as: 'user',
        include: [
          {
            model: File,
            attributes: ['url', 'path'],
            as: 'avatar',
          },
        ],
      },
      {
        model: User,
        attributes: ['id', 'name'],
        as: 'provider',
        include: [
          {
            model: File,
            attributes: ['url', 'path'],
            as: 'avatar',
          },
        ],
      },
    ],
  })

  return res.json(appointment)
}

const store = async (req, res) => {
  const schema = Yup.object().shape({
    date: Yup.date().required(),
    provider_id: Yup.number().required(),
  })

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Validation fails' })
  }

  // eslint-disable-next-line camelcase
  const { provider_id, date } = req.body
  const { userID } = req

  // Check if provider is a provider
  const isProvider = await User.findOne({
    where: { id: provider_id, provider: true },
  })

  if (!isProvider) {
    return res.status(401).json({ error: 'this user is not a provider' })
  }

  // check if date is a past date
  const hourStart = startOfHour(parseISO(date))

  if (isBefore(hourStart, new Date())) {
    return res.status(400).json({ error: 'past date are not permited' })
  }

  // Check provider availability
  const checkIsNotAvailability = await Appointment.findOne({
    where: {
      provider_id,
      canceled_at: null,
      date: hourStart,
    },
  })

  if (checkIsNotAvailability) {
    return res
      .status(400)
      .json({ errro: 'The provider is not avalilable in this time' })
  }

  const appointment = await Appointment.create({
    date: hourStart,
    user_id: userID,
    provider_id,
  })

  return res.json(appointment)
}

export default { index, store }
