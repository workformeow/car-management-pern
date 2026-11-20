import type { FuelType, Status } from '../types/car'

export const statusLabel: Record<Status, string> = {
  READY: 'Ready',
  BOOKED: 'Booked',
  MAINTAIN: 'Maintain',
  DISCHARGE: 'Dischange',
}

export const statusColor: Record<Status, string> = {
  READY: 'green',
  BOOKED: 'blue',
  MAINTAIN: 'orange',
  DISCHARGE: 'default',
}

export const fuelTypeLabel: Record<FuelType, string> = {
  HYBRID: 'Hybrid',
  EV: 'EV',
  PHEV: 'PHEV',
  GASOLINE: 'Gasolint',
}

export const fuelTypeColor: Record<FuelType, string> = {
  HYBRID: 'lime',
  EV: 'cyan',
  PHEV: 'geekblue',
  GASOLINE: 'volcano',
}
