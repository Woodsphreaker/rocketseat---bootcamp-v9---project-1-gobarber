import Appointment from '../models/Appointments'
import User from '../models/Users'
import File from '../models/Files'
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns'
import pt from 'date-fns/locale/pt'
import * as Yup from 'yup'
import Notification from '../schemas/Notifications'
import CancellationMail from '../jobs/cancellationMail'
import Queue from '../../lib/Queue'

const index = async (req, res) => {
  const { userID } = req
  const { page = 1 } = req.query

  const appointment = await Appointment.findAll({
    where: { user_id: userID, canceled_at: null },
    order: ['date'],
    attributes: ['id', 'date', 'past', 'cancelable'],
    limit: 20, // 20 records per page
    offset: ((page > 0 ? page : 1) - 1) * 20,
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

  // check if userID is same a provider id
  // eslint-disable-next-line camelcase
  if (provider_id === userID) {
    return res.status(400).json({
      error: 'a service provider cant schedule something for himself ',
    })
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

  /*
   * Notify appointment provider
   */
  const { name } = await User.findByPk(userID)
  const formatedDate = format(hourStart, '\'dia\' dd \'de\' MMMM\', às\' H:mm\'h\'', {
    locale: pt,
  })

  await Notification.create({
    content: `Novo agendamento para o cliente ${name} para o ${formatedDate} `,
    user: provider_id,
  })

  return res.json(appointment)
}

const destroy = async (req, res) => {
  const { id } = req.params
  const { userID } = req

  const appointment = await Appointment.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ['name', 'email'],
        as: 'provider',
      },
      {
        model: User,
        attributes: ['name'],
        as: 'user',
      },
    ],
  })

  if (!appointment) {
    return res.status(400).json({ error: 'This appointment not exists' })
  }

  if (appointment.user_id !== userID) {
    return res
      .status(400)
      .json({ error: 'You dont have permition to cancel this appointment' })
  }

  const subTwoHoursToDate = subHours(appointment.date, 2)

  if (isBefore(subTwoHoursToDate, new Date())) {
    return res.status(400).json({
      error: 'you can only cancel a schedule up to two hours before it starts',
    })
  }

  await appointment.update({
    canceled_at: new Date(),
  })

  // send email to provider

  Queue.add(CancellationMail.key, {
    appointment,
  })

  res.send(appointment)
}

export default { index, store, destroy }
