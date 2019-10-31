import Users from '../models/Users'
import Files from '../models/Files'

const index = async (req, res) => {
  const providers = await Users.findAll({
    where: { provider: true },
    attributes: ['id', 'name', 'email', 'avatar_id'],
    include: {
      model: Files,
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
