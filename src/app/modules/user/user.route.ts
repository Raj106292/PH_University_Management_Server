import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { UserController } from './user.controller'
import { USerValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(USerValidation.createUserZodSchema),
  UserController.createUser
)

export const UserRoute = router
