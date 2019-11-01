import Appointment from '../models/Appointments'
import User from '../models/Users'
import { startOfHour, parseISO, isBefore } from 'date-fns'
import * as Yup from 'yup'

const index = async (req, res) => {
  const appointment = await Appointment.findAll({
    attributes: ['id', 'date'],
    include: {
      model: User,
      attributes: [],
      as: 'user',
    },
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
