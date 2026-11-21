import { useState, type ReactNode } from 'react'
import { Button, Layout, Menu, theme } from 'antd'
import {
  CarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const items = [
  {
    key: '/',
    icon: <UnorderedListOutlined />,
    label: 'List Cars',
  },
  {
    key: '/create',
    icon: <PlusOutlined />,
    label: 'Create Car',
  },
]

export default function Dashboard({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout className="h-full min-h-dvh!">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex h-16 items-center justify-center gap-2 text-white">
          <CarOutlined className="text-lg" />
          <span className="text-lg font-bold">{!collapsed && 'Car Manage'}</span>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={items}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
