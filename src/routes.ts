import { Router } from 'express'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

// USER
const userController = new UserController()
router.post('/users', userController.create)

// SURVEY
const surveyController = new SurveysController()
router.post('/surveys', surveyController.create)
router.get('/surveys', surveyController.show)

export { router }