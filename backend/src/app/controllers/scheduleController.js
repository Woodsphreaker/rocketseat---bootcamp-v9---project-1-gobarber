import User from '../models/Users'
import Appointment from '../models/Appointments'
import { startOfDay, endOfDay, parseISO } from 'date-fns'
import { Op } from 'sequelize'

const index = async (req, res) => {
  const { userID } = req
  const { date } = req.query

  // check if user is a provider
  const checkUserProvider = await User.findOne({
    where: { id: userID, provider: true },
  })

  if (!checkUserProvider) {
    return res.status(401).json({ error: 'User is not a provider' })
  }

  const parsedDate = parseISO(date)
  // console.log(Op)

  const schedules = await Appointment.findAll({
    where: {
      provider_id: userID,
      canceled_at: null,
      date: { [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)] },
    },
    attributes: ['date'],
    include: [
      {
        model: User,
        attributes: ['name', 'email'],
        as: 'user',
      },
      {
        model: User,
        attributes: ['name'],
        as: 'provider',
      },
    ],
  })

  if (!schedules) {
    return res.status(400).json({ message: 'no schedules found' })
  }

  return res.json(schedules)
}

export default { index }
