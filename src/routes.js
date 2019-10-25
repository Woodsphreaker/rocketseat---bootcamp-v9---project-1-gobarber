import { Router } from 'express'

// Controllers
import userController from './app/controllers/userControler'

// Middlewares

const router = Router()

router.get('/', userController.store)

export default router
