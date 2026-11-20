import { Router } from 'express'
import { carRouter } from './features/car'

export const router = Router()

router.use('/api/cars', carRouter)
