import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import type { Car } from '../types/car'
import { CarCard } from '../components/ui/CarCard'

export default function Home() {
  const [cars, setCars] = useState<Car[]>([])
  const [refetch] = useState(false)

  useEffect(() => {
    api
      .listCars()
      .then((data) => setCars(data ?? []))
      .catch((err) => console.error(err))
  }, [refetch])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car}></CarCard>
      ))}
    </div>
  )
}
