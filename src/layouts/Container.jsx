import React from 'react'
import { Layout } from 'antd'
import TitleCard from '../components/cards/title/TitleCard';
// import Files from '../pages/files/Files';
// import Messages from '../pages/messages/Messages';
import ViewAllUsers from '../pages/users/ViewAllUsers';

const { Content } = Layout;

export default function Container() {
  return (
    <Content style={{
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30,
      PaddingBottom: 30
    }}>
      <TitleCard title={"Messages"}/>
      <ViewAllUsers />
    </Content>
  )
}
