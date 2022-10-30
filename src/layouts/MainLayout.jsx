import React from 'react'
import { Layout } from 'antd'
import SideBar from '../components/navigation/sidebar/SideBar'
import FooterBar from './FooterBar'
import Container from './Container'

export default function MainLayout() {
  return (
    <Layout style={{
      height: '100vh'
    }}>
      <SideBar />
      <Layout>
        <Container />
        <FooterBar />
      </Layout>
    </Layout>
  )
}
