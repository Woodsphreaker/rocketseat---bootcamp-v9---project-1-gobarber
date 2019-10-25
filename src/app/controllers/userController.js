import Users from '../models/Users'

const index = () => {}

const show = () => {}

const update = () => {}

const store = (req, res) => {
    Users.create(req.body)
        .then(user => res.json(user))
        .catch(error => res.json(error))
}

const destroy = () => {}

export default { index, show, store, update, destroy }
