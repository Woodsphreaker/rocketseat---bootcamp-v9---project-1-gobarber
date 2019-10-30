import { Router } from 'express'

// Controllers
import userController from './app/controllers/userController'
import sessionController from './app/controllers/sessionContoller'
import fileController from './app/controllers/fileController'

// Middlewares
import auth from './app/middlewares/auth'
import upload from './app/middlewares/upload'

const router = Router()

router.post('/session', sessionController.store)

router.use(auth)
router.post('/users', userController.store)
router.put('/users', userController.update)

router.post('/file', upload, fileController.store)

export default router
