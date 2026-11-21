import type { CreateCarForm } from '../types/car'
import { api } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import { CarForm } from '../components/ui/CarForm'

export default function CarCreate() {
  const navigate = useNavigate()

  const handleSubmit = async (values: CreateCarForm) => {
    await api.createCar(values)
    navigate('/')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">Add Car</h1>
        <hr className="text-gray-600" />
      </div>

      <CarForm onSubmit={handleSubmit}></CarForm>
    </div>
  )
}
