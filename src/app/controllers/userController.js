import Users from '../models/Users'

const index = () => {}

const show = () => {}

const update = async (req, res) => {
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
