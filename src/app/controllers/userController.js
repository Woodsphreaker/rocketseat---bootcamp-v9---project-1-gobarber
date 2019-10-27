import Users from '../models/Users'
import * as Yup from 'yup'

const index = () => {}

const show = () => {}

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
  const { userID } = req

  const user = await Users.findByPk(userID)

  if (email !== user.email) {
    const exists = await Users.findOne({ where: { email } })

    if (exists) {
      return res.status(400).send({ error: 'User already exists' })
    }
  }

  if (oldPassword && !(await user.checkPassword(oldPassword))) {
    return res.status(401).json({ error: 'password incorrect' })
  }

  const { id, name, provider } = await user.update(req.body)

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

  const exists = await Users.findOne({ where: { email: req.body.email } })

  if (exists) {
    return res.status(400).send({ error: 'User already exists' })
  }

  const { name, email, provider } = await Users.create(req.body)
  return res.send({
    name,
    email,
    provider,
  })
}

const destroy = () => {}

export default { index, show, store, update, destroy }
