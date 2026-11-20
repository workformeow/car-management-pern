import type { NextFunction, Request, Response } from 'express'
import type { CarCreateInput } from './car.schema'
import { ERROR, SUCCESS } from '../../shared/const'
import type { Car } from '../../generated/prisma/client'
import * as carService from './car.service'

export const create = async (
  req: Request<unknown, unknown, CarCreateInput>,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  try {
    const data: Car = await carService.create(req.body)
    res.json({
      message: SUCCESS.create('Car'),
      data,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(ERROR.INTERNAL_SERVER_ERROR)
  }
}
