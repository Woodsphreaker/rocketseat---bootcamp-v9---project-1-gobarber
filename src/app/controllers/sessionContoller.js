import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
import Users from '../models/Users'

const store = async (req, res) => {
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
