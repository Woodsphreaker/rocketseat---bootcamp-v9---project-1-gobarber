import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
import * as Yup from 'yup'
import Users from '../models/Users'

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

    const user = await Users.findOne({ where: { email } })

    if (!user) {
        return res.status(401).json({ error: 'user not found' })
    }

    if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'user or password incorrect' })
    }

    const { id, name } = user

    const token = jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expires,
    })

    return res.json({
        user: {
            id,
            name,
            email,
        },
        token,
    })
}

export default { store }
