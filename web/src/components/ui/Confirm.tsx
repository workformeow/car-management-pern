import { Popconfirm } from 'antd'
import type { ReactNode } from 'react'

interface ComfirmProps {
  confirm: () => void
  children: ReactNode
}

export function Confirm({ confirm, children }: ComfirmProps) {
  return (
    <>
      <Popconfirm
        title="Delete the car"
        description="Are you sure to delete this car?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        {children}
      </Popconfirm>
    </>
  )
}
