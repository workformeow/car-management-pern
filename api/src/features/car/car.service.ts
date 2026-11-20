import { prisma } from '../../core/database'
import type { Car, Prisma } from '../../generated/prisma/client'
import { ERROR } from '../../shared/const'
import type { CarCreateInput, CarUpdateInput } from './car.schema'
import createError from 'http-errors'

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

function normalizeCar(input: CarCreateInput): Prisma.CarCreateInput {
  const car: Prisma.CarCreateInput = {
    registrationNumber: input.registrationNumber.replace(/\s+/g, ''),
    brand: input.brand,
    model: input.model,
    notes: input.notes || null,
    vehicleId: input.vehicleId,
    seats: Number(input.seats),
    province: input.province,
    year: Number(input.year),
    fuelType: input.fuelType,
    mileage: input.mileage,
    color: input.color,
    status: input.status,
    imageUrl: input.imageUrl || null,
  }

  return car
}

// ------------------------------------------------------------------------------
// * Exported
// ------------------------------------------------------------------------------

export const create = async (input: CarCreateInput): Promise<Car> => {
  const existingCar = await prisma.car.findUnique({ where: { vehicleId: input.vehicleId } })
  if (existingCar) throw new createError.NotFound(ERROR.alreadyExists('Vehicle'))

  const carInput = normalizeCar(input)
  const carResult: Car = await prisma.car.create({ data: { ...carInput } })

  return carResult
}

export const update = async (id: string, input: CarUpdateInput): Promise<Car> => {
  const existingCar = await prisma.car.findUnique({ where: { id } })
  if (!existingCar) throw new createError.NotFound(ERROR.notFound('Car'))

  const isDuplicate = await prisma.car.findUnique({
    where: { vehicleId: input.vehicleId, NOT: { id } },
  })
  if (isDuplicate) throw new createError.Conflict(ERROR.alreadyExists('Vehicle'))

  const carInput = normalizeCar(input)
  const carResult: Car = await prisma.car.update({
    where: { id },
    data: { ...carInput },
  })

  return carResult
}
