export const fuelType = {
  HYBRID: 'HYBRID',
  EV: 'EV',
  PHEV: 'PHEV',
  GASOLINE: 'GASOLINE',
} as const
export type FuelType = (typeof fuelType)[keyof typeof fuelType]

export const status = {
  READY: 'READY',
  BOOKED: 'BOOKED',
  MAINTAIN: 'MAINTAIN',
  DISCHARGE: 'DISCHARGE',
} as const
export type Status = (typeof status)[keyof typeof status]

export interface Car {
  id: string
  registrationNumber: string
  brand: string
  model: string
  vehicleId: string
  seats: number
  province: string
  year: number
  fuelType: FuelType
  mileage: number
  color: string
  status: Status
  notes?: string | null
  imageUrl?: string | null
  createdAt: string
  updatedAt: string
}

export type CreateCar = Omit<Car, 'id' | 'createdAt' | 'updatedAt'>
