import { Router } from 'express'
import { validate } from '../../core/validate'
import { carSchema } from './car.schema'
import * as carController from './car.controller'

export const carRouter = Router()

carRouter.post('/', validate(carSchema.create.body), carController.create)
