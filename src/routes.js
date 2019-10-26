import { Router } from 'express'

// Controllers
import userController from './app/controllers/userController'
import sessionController from './app/controllers/sessionContoller'

// Middlewares
import auth from './app/middlewares/auth'

const router = Router()

router.post('/session', sessionController.store)

router.use(auth)
router.post('/users', userController.store)
router.put('/users', userController.update)

export default router
