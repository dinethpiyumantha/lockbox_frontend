import React from 'react'
import { Layout } from 'antd'
import Constants from '../utils/Constants';

const { Footer } = Layout;

export default function FooterBar() {
  return (
    <Footer 
      style={{
        background: '#111111',
        color: '#c2bebb',
        textAlign: 'right'
      }}>
      { Constants.COPYRIGHT }
    </Footer>
  )
}