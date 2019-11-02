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

export default { index }
