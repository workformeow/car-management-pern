import z from 'zod'
import { ERROR } from '../../shared/const'
import { FuelType, Status } from '../../generated/prisma/enums'

const thaiRegistrationNumberRegex = /^(([1-9][ก-ฮ]{2}|[ก-๙]{2,7})\s?[1-9]\d{0,3}|\d{2,3}-\d{4})$/
const vehicleRegex = /[A-HJ-NPR-Z0-9]{17}/i
const yearRegex = /^\d{4}$/

const createSchema = z.object({
  registrationNumber: z
    .string({ error: ERROR.requiredField('registrationNumber') })
    .trim()
    .regex(thaiRegistrationNumberRegex, { error: ERROR.invalidField('registrationNumber') }),
  brand: z.string({ error: ERROR.requiredField('brand') }),
  model: z.string({ error: ERROR.requiredField('model') }),
  notes: z.string().optional(),
  vehicleId: z
    .string({ error: ERROR.requiredField('vehicleId') })
    .trim()
    .regex(vehicleRegex, { error: ERROR.invalidField('vehicleId') }),
  seats: z.int32({ error: ERROR.requiredField('seats') }),
  province: z.string({ error: ERROR.requiredField('province') }),
  year: z
    .string({ error: ERROR.requiredField('year') })
    .regex(yearRegex, { error: ERROR.invalidField('year') })
    .transform(Number),
  fuelType: z.enum(FuelType, { error: ERROR.invalidField('fuelType') }),
  mileage: z
    .int({ error: ERROR.requiredField('mileage') })
    .nonnegative({ error: ERROR.invalidField('mileage') }),
  color: z.string({ error: ERROR.requiredField('color') }),
  status: z.enum(Status, { error: ERROR.invalidField('status') }),
  imageUrl: z.httpUrl().nullish(),
})

const idParamsSchema = z.object({
  id: z.string({ error: ERROR.requiredField('Car id') }),
})

export const carSchema = {
  create: { body: createSchema },
  update: { parmas: idParamsSchema, body: createSchema },
} as const

export type CarCreateInput = z.infer<typeof createSchema>
export type CarUpdateInput = z.infer<typeof createSchema>
export type CardIdParams = z.infer<typeof idParamsSchema>
