import type { NextFunction, Request, Response } from 'express'
import type { CarCreateInput, CarIdParams, CarUpdateInput } from './car.schema'
import { ERROR, SUCCESS } from '../../shared/const'
import type { Car } from '../../generated/prisma/client'
import * as carService from './car.service'

export const list = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data: Car[] = await carService.list()
    res.json({
      message: SUCCESS.list('car'),
      data,
    })
  } catch (error) {
    next(error)
  }
}

export const get = async (
  req: Request<CarIdParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: Car = await carService.get(req.params.id)
    res.json({
      message: SUCCESS.get('car'),
      data,
    })
  } catch (error) {
    next(error)
  }
}

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
  req: Request<CarIdParams, unknown, CarUpdateInput>,
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

export const remove = async (
  req: Request<CarIdParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await carService.remove(req.params.id)
    res.json({
      message: SUCCESS.delete('car'),
    })
  } catch (error) {
    next(error)
  }
}
