import React, { useState, useEffect } from 'react'
import { Button, Card, Input, Space } from 'antd'
import {
  AppstoreFilled,
  UnorderedListOutlined,
} from '@ant-design/icons'
import FileUploadModel from '../../components/cards/file/FileUploadModel';
import FileCard from '../../components/cards/file/FileCard';
import axios from 'axios';
import APIS from '../../apis/APIS';

const { Search } = Input;

export default function Files() {

  const [thumbnail, setThumbnail] = useState(true);

  const onThumbnailTrigger = () => {
    setThumbnail(!thumbnail);
  }

  const [data, setdata] = useState([]);

    const fetchData = () => {
        axios.get(APIS.file.GET_ALL)
            .then(res => {
                setdata(res.data)
            }).catch(err => {
                console.log("error when getting msgs "+err);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

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
        height: '66vh',
      }}>
        <Space wrap direction={thumbnail ? 'horizontal' : 'vertical'} style={{ position: 'relative', width: '100% '}}>
          { 
          data && data.map((el , index) => (
            <FileCard thumbnail={thumbnail} title={el.name} key={index} />
          ))
          }
        </Space>
      </Card>
    </>
  )
}