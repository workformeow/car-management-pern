import type { NextFunction, Request, Response } from 'express'
import type { CarCreateInput, CardIdParams, CarUpdateInput } from './car.schema'
import { ERROR, SUCCESS } from '../../shared/const'
import type { Car } from '../../generated/prisma/client'
import * as carService from './car.service'

export const create = async (
  req: Request<unknown, unknown, CarCreateInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: Car = await carService.create(req.body)
    res.json({
      message: SUCCESS.create('Car'),
      data,
    })
  } catch (error) {
    next(error)
  }
}

export const update = async (
  req: Request<CardIdParams, unknown, CarUpdateInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: Car = await carService.update(req.params.id, req.body)
    res.json({
      message: SUCCESS.update('Car'),
      data,
    })
  } catch (error) {
    next(error)
  }
}
