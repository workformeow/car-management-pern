import type { ApiResponse } from '../types/api'
import type { Car } from '../types/car'

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

export const api = {
  listCars: (): Promise<Car[]> => get('/cars'),
}
