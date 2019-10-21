import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  return res.send({message: "ok, running"})
})

export default router