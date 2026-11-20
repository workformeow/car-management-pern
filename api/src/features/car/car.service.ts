import { prisma } from '../../core/database'
import type { Car, Prisma } from '../../generated/prisma/client'
import { ERROR } from '../../shared/const'
import type { CarCreateInput } from './car.schema'

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
  if (existingCar) throw new Error(ERROR.alreadyExists('Vehicle'))

  const carInput = normalizeCar(input)
  const carResult = await prisma.car.create({ data: { ...carInput } })

  const data: Car = carResult
  return data
}
