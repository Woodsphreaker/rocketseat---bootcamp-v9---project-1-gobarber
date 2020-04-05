import User from '../models/Users'
import File from '../models/Files'

const index = async (req, res) => {
  const providers = await User.findAll({
    where: { provider: true },
    attributes: ['id', 'name', 'email', 'avatar_id'],
    include: {
      model: File,
      attributes: ['id', 'name', 'path', 'url'],
      as: 'avatar',
    },
  })

  if (!providers) {
    return res.status(400).json({ error: 'no providers found' })
  }

  res.json(providers)
}

export default { index }
