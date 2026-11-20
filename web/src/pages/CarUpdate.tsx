import { api } from '../lib/api'
import { useNavigate, useParams } from 'react-router-dom'
import { CarForm } from '../components/ui/CarForm'
import type { Car, CreateCar } from '../types/car'
import { useEffect, useState } from 'react'
import LoadingSpin from '../components/ui/Loading'

export default function CarUpdate() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [car, setCar] = useState<Car>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .getCar(id!)
      .then((value) => setCar(value))
      .finally(() => setLoading(false))
  }, [id])

  const handleSubmit = async (values: CreateCar) => {
    await api.updateCar(id!, values)
    navigate('/')
  }

  if (loading) {
    return <LoadingSpin />
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">Update Car</h1>
        <hr className="text-gray-600" />
      </div>
      {car && <CarForm initialValues={car} onSubmit={handleSubmit}></CarForm>}
    </div>
  )
}
