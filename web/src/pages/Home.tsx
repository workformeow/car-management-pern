import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import type { Car } from '../types/car'
import { CarCard } from '../components/ui/CarCard'
import LoadingSpin from '../components/ui/Loading'

export default function Home() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [refetch] = useState(false)

  useEffect(() => {
    api
      .listCars()
      .then((data) => setCars(data ?? []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [refetch])

  if (loading) {
    return <LoadingSpin />
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}
