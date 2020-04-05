import User from '../models/Users'
import * as Yup from 'yup'

const index = async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'provider', 'created_at'],
  })

  if (!users) {
    return res.status(400).json({ error: 'No users found' })
  }

  console.log(users[0].dataValues.created_at)

  return res.json(users)
}

const show = async (req, res) => {
  const { id } = req.params
  const user = await User.findOne({
    where: { id },
    attributes: ['id', 'name', 'email', 'provider', 'created_at'],
  })

  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  return res.json(user)
}

const update = async (req, res) => {
  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
    oldPassword: Yup.string(),
    password: Yup.string()
      .min(6)
      .when('oldPassword', (oldPassword, field) => {
        return oldPassword ? field.required() : field
      }),
    confirmPassword: Yup.string().when('password', (password, field) => {
      return password ? field.required().oneOf([Yup.ref('password')]) : field
    }),
  })

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ erro: 'Validation failed' })
  }

  const { email, oldPassword } = req.body
  const { id } = req.params

  const user = await User.findByPk(id)

  if (email !== user.email) {
    const exists = await User.findOne({ where: { email } })

    if (exists) {
      return res.status(400).send({ error: 'User already exists' })
    }
  }

  if (oldPassword && !(await user.checkPassword(oldPassword))) {
    return res.status(401).json({ error: 'password incorrect' })
  }

  const { name, provider } = await user.update(req.body)

  res.json({
    id,
    name,
    provider,
  })
}

const store = async (req, res) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
  })

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ erro: 'Validation failed' })
  }

  const exists = await User.findOne({ where: { email: req.body.email } })

  if (exists) {
    return res.status(400).send({ error: 'User already exists' })
  }

  const { name, email, provider } = await User.create(req.body)
  return res.send({
    name,
    email,
    provider,
  })
}

const destroy = () => {}

export default { index, show, store, update, destroy }
