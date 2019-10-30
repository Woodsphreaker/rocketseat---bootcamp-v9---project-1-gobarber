import jwt from 'jsonwebtoken'
import auth from '../../config/auth'

export default (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'no header auth found' })
  }

  const [bearer, token] = authorization.split(' ')

  if (bearer !== 'Bearer') {
    return res.status(401).json({ error: 'token malformated' })
  }

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  jwt.verify(token, auth.secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'token invalid' })
    }
    const { id } = decoded
    req.userID = id
    // console.log(decoded)
    next()
  })
}
