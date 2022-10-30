import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { menuitems } from './MenuList';

const { Sider } = Layout;

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuitems} />
    </Sider>
  )
}
