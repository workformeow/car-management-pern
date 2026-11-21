import type { ApiResponse } from '../types/api'
import type { Car, CreateCar, CreateCarForm, CreateCarInput } from '../types/car'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

async function get(path: string) {
  try {
    const res = await fetch(`${BASE_URL}/api${path}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const json: ApiResponse<T> = await res.json()
    return json.data
  } catch (error) {
    const err = error as Error
    console.error('API error:', err.message)
  }
}

async function getById(path: string, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/api${path}/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const json: ApiResponse<T> = await res.json()
    return json.data
  } catch (error) {
    const err = error as Error
    console.error('API error:', err.message)
  }
}

async function post(path: string, body: object) {
  try {
    const res = await fetch(`${BASE_URL}/api${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to create data')
    }

    const json: ApiResponse<T> = await res.json()
    return json.data
  } catch (error) {
    const err = error as Error
    console.error('API error:', err.message)
  }
}

async function put(path: string, id: string, body: object) {
  try {
    const res = await fetch(`${BASE_URL}/api${path}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to update data')
    }

    const json: ApiResponse<T> = await res.json()
    return json.data
  } catch (error) {
    const err = error as Error
    console.error('API error:', err.message)
  }
}

export async function remove(path: string, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/api${path}/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error('Failed to delete data')
    }

    const json: ApiResponse<T> = await res.json()
    return json.data
  } catch (error) {
    const err = error as Error
    console.error('API error:', err.message)
  }
}

export const api = {
  listCars: (): Promise<Car[]> => get('/cars'),
  getCar: (id: string): Promise<Car> => getById('/cars', id),
  createCar: (body: CreateCar): Promise<Car> => post('/cars', normalizeCar(body)),
  updateCar: (id: string, body: CreateCar): Promise<Car> => put('/cars', id, normalizeCar(body)),
  deleteCar: (id: string): Promise<void> => remove('/cars', id),
}

function normalizeCar(input: CreateCarForm): CreateCarInput {
  const car: CreateCarInput = {
    registrationNumber: input.registrationNumber.replace(/\s+/g, ''),
    brand: input.brand,
    model: input.model,
    notes: input.notes || null,
    vehicleId: input.vehicleId,
    seats: Number(input.seats),
    province: input.province,
    year: input.year.toString(),
    fuelType: input.fuelType,
    mileage: input.mileage,
    color: input.color,
    status: input.status,
    imageUrl: input.imageUrl || null,
  }

  return car
}
