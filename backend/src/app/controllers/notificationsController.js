import Notifications from '../schemas/Notifications'
import User from '../models/Users'

const index = async (req, res) => {
  const { userID } = req

  // Check if provider is a provider
  const isProvider = await User.findOne({
    where: { id: userID, provider: true },
  })

  if (!isProvider) {
    return res
      .status(401)
      .json({ error: 'Only provider can load notifications' })
  }

  const notifications = await Notifications.find({
    user: userID,
  })
    .sort({ createdAt: 'desc' })
    .limit(20)

  res.json(notifications)
}

const update = async (req, res) => {
  const { notificationID } = req.params
  // const { userID } = req
  const notification = await Notifications.findByIdAndUpdate(
    notificationID,
    {
      read: true,
    },
    {
      new: true, // returns updated record
    }
  )

  res.json(notification)
}

export default { index, update }
