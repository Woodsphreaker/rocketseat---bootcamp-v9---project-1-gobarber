import { Router } from 'express'

// Controllers
import userController from './app/controllers/userController'
import providersController from './app/controllers/providerController'
import sessionController from './app/controllers/sessionContoller'
import fileController from './app/controllers/fileController'
import appointmentController from './app/controllers/appointmentController'
import scheduleController from './app/controllers/scheduleController'
import notificationController from './app/controllers/notificationsController'
import availableController from './app/controllers/availableController'

// Middlewares
import auth from './app/middlewares/auth'
import upload from './app/middlewares/upload'

const router = Router()

router.post('/session', sessionController.store)

// users
router.get('/users', userController.index)
router.get('/users/:id', userController.show)
router.post('/users', userController.store)

router.use(auth)
router.put('/users/', userController.update)

// providers
router.get('/providers', providersController.index)
router.get('/provider/:providerID/available', availableController.index)

// appointments
router.get('/appointments', appointmentController.index)
router.post('/appointments', appointmentController.store)
router.delete('/appointments/:id', appointmentController.destroy)

// schedules
router.get('/schedules', scheduleController.index)

// notifications
router.get('/notifications', notificationController.index)
router.put('/notifications/:notificationID', notificationController.update)

// file
router.post('/file', upload, fileController.store)

export default router
