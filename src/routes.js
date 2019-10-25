import { Router } from 'express'

// Controllers
import userController from './app/controllers/userController'

// Middlewares

const router = Router()

router.post('/users', userController.store)

export default router
