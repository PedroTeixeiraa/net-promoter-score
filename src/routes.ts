import { Router } from 'express'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

const userController = new UserController()
const surveyController = new SurveysController()
const sendMailController = new SendMailController()

// USER
router.post('/users', userController.create)

// SURVEY
router.post('/surveys', surveyController.create)
router.get('/surveys', surveyController.show)

// SEND MAIL
router.post('/sendMail', sendMailController.execute)

export { router }