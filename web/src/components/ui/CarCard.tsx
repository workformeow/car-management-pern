import { DeleteFilled, EditOutlined } from '@ant-design/icons'
import { Card, Tag } from 'antd'
import type { Car } from '../../types/car'
import { statusColor, statusLabel } from '../../const/car'
import { useNavigate } from 'react-router-dom'

interface CarCardProps {
  car: Car
}

const PLACEHOLDER_IMG = 'https://placehold.co/600x400?text=No+Image'

export function CarCard({ car }: CarCardProps) {
  const navigate = useNavigate()
  const tagLabel = statusLabel[car.status]
  const tagColor = statusColor[car.status]

  return (
    <Card
      cover={
        <div className="relative">
          <img draggable={false} src={car.imageUrl || PLACEHOLDER_IMG} />
          <Tag color={tagColor} className="absolute! top-2 right-2">
            {tagLabel}
          </Tag>
        </div>
      }
      actions={[
        <EditOutlined
          key="edit"
          onClick={() => navigate(`/${car.id}/update`)}
          style={{ color: 'lightgreen' }}
        />,
        <DeleteFilled key="delete" />,
      ]}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-base">{car.brand}</span>
            <span className="text-base">{car.model}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-gray-400">{car.year}</span>
            <span className="text-gray-400">{car.province}</span>
          </div>
        </div>

        <hr className="text-gray-500" />

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400">Seats</span>
            <span className="text-base">{car.seats} seats</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400">Fuel Type</span>
            <span className="text-base">{car.fuelType}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400">Mileage</span>
            <span className="text-base">{car.mileage.toLocaleString()}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400">Color</span>
            <span className="text-base">{car.color}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
