import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

export default function TitleCard({title, icon}) {
  return (
    <Title>{ icon } { title }</Title>
  )
}
