import Users from '../models/Users'

const index = () => {}

const show = () => {}

const update = (req, res) => {
    res.json({ message: 'ok' })
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
