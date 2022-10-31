import React, { useState } from 'react'
import { Button, Card, Input } from 'antd'
import {
  AppstoreFilled,
  UnorderedListOutlined,
} from '@ant-design/icons'
import FileUploadModel from '../../components/cards/file/FileUploadModel';

const { Search } = Input;

export default function Files() {

  const [thumbnail, setThumbnail] = useState(true);

  const onThumbnailTrigger = () => {
    setThumbnail(!thumbnail);
  }

  return (
    <>
      <div style={{
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 15,
        color: '#111111',
      }}>
        <div>
          <Button
            onClick={() => onThumbnailTrigger()}
            type="dashed"
            icon={thumbnail ? <AppstoreFilled /> : <UnorderedListOutlined />} />
          <FileUploadModel />
        </div>
        <Search
          placeholder="input search text"
          allowClear
          style={{
            width: 300,
          }}
        />

      </div>
      <Card style={{
        height: '66vh'
      }}>

      </Card>
    </>
  )
}