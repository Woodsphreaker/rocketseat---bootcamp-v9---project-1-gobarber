import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
import JwtValidation from '../schemas/JwtValidations'

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

  jwt.verify(token, auth.secret, async (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'token invalid' })
    }

    const { id } = decoded

    const isValid = await JwtValidation.findOne({
      userID: id,
      token,
      isValid: true,
    })

    if (!isValid) {
      return res.status(401).json({ error: 'Token expired' })
    }

    req.userID = id
    // console.log(decoded)
    next()
  })
}
