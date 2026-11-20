import { fuelType, status, type Status } from '../types/car'

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

export const statusOptions = [
  { value: status.READY, label: 'Readly' },
  { value: status.BOOKED, label: 'Booked' },
  { value: status.MAINTAIN, label: 'Maintain' },
  { value: status.DISCHARGE, label: 'Discharge' },
]

export const fuelOptions = [
  { value: fuelType.EV, label: 'EV' },
  { value: fuelType.HYBRID, label: 'Hybrid' },
  { value: fuelType.PHEV, label: 'PHEV' },
  { value: fuelType.GASOLINE, label: 'Gasoline' },
]
