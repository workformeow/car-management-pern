import { Router } from 'express'
import { validate } from '../../core/validate'
import { carSchema } from './car.schema'
import * as carController from './car.controller'

export const carRouter = Router()

carRouter.post('/', validate(carSchema.create), carController.create)
carRouter.put('/:id', validate(carSchema.update), carController.update)
