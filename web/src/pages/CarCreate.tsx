import { Button, Form, Input, InputNumber, Select, type FormProps } from 'antd'
import type { CreateCar } from '../types/car'
import { fuelOptions, statusOptions } from '../const/car'
import { api } from '../lib/api'
import { useNavigate } from 'react-router-dom'

const thaiRegistrationNumberRegex = /^(([1-9][ก-ฮ]{2}|[ก-๙]{2,7})\s?[1-9]\d{0,3}|\d{2,3}-\d{4})$/
const vehicleRegex = /^[A-HJ-NPR-Z0-9]{17}$/i
const yearRegex = /^\d{4}$/

export default function CarCreate() {
  const navigate = useNavigate()
  const [form] = Form.useForm<CreateCar>()

  const onFinish: FormProps<CreateCar>['onFinish'] = (values) => {
    api.createCar(values).then(() => navigate('/'))
  }

  const required = (label: string) => ({ required: true, message: `Please input ${label}` })
  const pattern = (regex: RegExp) => ({ pattern: regex, message: 'Invalid Format' })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">Add Car</h1>
        <hr className="text-gray-600" />
      </div>

      <Form
        form={form}
        layout="vertical"
        requiredMark="optional"
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
          <Form.Item<CreateCar> label="Brand" name="brand" rules={[required('Brand')]}>
            <Input placeholder="Toyota" />
          </Form.Item>

          <Form.Item<CreateCar> label="Model" name="model" rules={[required('Model')]}>
            <Input placeholder="Yaris Ativ" />
          </Form.Item>

          <Form.Item<CreateCar>
            label="Year"
            name="year"
            rules={[required('Year'), pattern(yearRegex)]}
          >
            <Input placeholder="2021" />
          </Form.Item>

          <Form.Item<CreateCar> label="Fuel Type" name="fuelType" rules={[required('Fuel Type')]}>
            <Select options={fuelOptions} placeholder="Choose Fuel Type" />
          </Form.Item>

          <Form.Item<CreateCar> label="Color" name="color" rules={[required('Color')]}>
            <Input placeholder="white" />
          </Form.Item>

          <Form.Item<CreateCar> label="Seats" name="seats" rules={[required('Seats')]}>
            <InputNumber className="w-full!" placeholder="4" min={0} />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <Form.Item<CreateCar>
            label="Registration Number"
            name="registrationNumber"
            rules={[required('Registration Number'), pattern(thaiRegistrationNumberRegex)]}
          >
            <Input placeholder="1กข 1234" />
          </Form.Item>

          <Form.Item<CreateCar> label="Province" name="province" rules={[required('Province')]}>
            <Input placeholder="bangkok" />
          </Form.Item>

          <Form.Item<CreateCar>
            label="Vehicle Identification Number"
            name="vehicleId"
            rules={[required('Vehicle Identification Number'), pattern(vehicleRegex)]}
          >
            <Input placeholder="MR0FB8CD5N0123458" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <Form.Item<CreateCar> label="Mileage" name="mileage" rules={[required('Mileage')]}>
            <InputNumber className="w-full!" placeholder="45000" min={0} />
          </Form.Item>

          <Form.Item<CreateCar> label="Status" name="status" rules={[required('Status')]}>
            <Select options={statusOptions} placeholder="Choose Status" />
          </Form.Item>

          <Form.Item<CreateCar> label="Notes" name="notes" className="md:col-span-2">
            <Input.TextArea rows={3} />
          </Form.Item>
        </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
