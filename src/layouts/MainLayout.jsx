import React from 'react'
import { Layout } from 'antd'
import SideBar from '../components/navigation/sidebar/SideBar'

export default function MainLayout() {
  return (
    <Layout style={{
      height: '100vh'
    }}>
      <SideBar />
      <Layout>
        
      </Layout>
    </Layout>
  )
}
