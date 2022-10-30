import React from 'react'
import { Layout } from 'antd'
import Constants from '../utils/Constants';

const { Footer } = Layout;

export default function FooterBar() {
  return (
    <Footer 
      style={{
        background: '#202124',
        color: '#ffffff',
        textAlign: 'right'
      }}>
      { Constants.COPYRIGHT }
    </Footer>
  )
}