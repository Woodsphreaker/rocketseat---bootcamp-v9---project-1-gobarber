import { Router } from 'express'

// Controllers
import userController from './app/controllers/userController'
import providersController from './app/controllers/providerController'
import sessionController from './app/controllers/sessionContoller'
import fileController from './app/controllers/fileController'

// Middlewares
import auth from './app/middlewares/auth'
import upload from './app/middlewares/upload'

const router = Router()

router.post('/session', sessionController.store)

router.use(auth)

// users
router.get('/users', userController.index)
router.post('/users', userController.store)
router.put('/users/:id', userController.update)

// providers
router.get('/providers', providersController.index)

// file
router.post('/file', upload, fileController.store)

export default router
