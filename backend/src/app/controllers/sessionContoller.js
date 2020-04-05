import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
import * as Yup from 'yup'
import User from '../models/Users'
import File from '../models/Files'
import JwtValidation from '../schemas/JwtValidations'

const store = async (req, res) => {
  const schema = Yup.object().shape({
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

  const { email, password } = req.body

  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: File,
        as: 'avatar',
        attributes: ['path', 'id', 'url'],
      },
    ],
  })

  if (!user) {
    return res.status(401).json({ error: 'user not found' })
  }

  if (!(await user.checkPassword(password))) {
    return res.status(401).json({ error: 'user or password incorrect' })
  }

  const { id, name, avatar, provider } = user

  const token = jwt.sign({ id }, auth.secret, {
    expiresIn: auth.expires,
  })

  await JwtValidation.findOneAndUpdate(
    {
      userID: id,
      isValid: true,
    },
    {
      isValid: false,
    }
  )

  await JwtValidation.create({
    userID: id,
    token,
  })

  return res.json({
    user: {
      id,
      name,
      email,
      provider,
      avatar,
    },
    token,
  })
}

export default { store }
