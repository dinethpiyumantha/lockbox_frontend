import { Button, Card, List } from 'antd'
import React, { useState } from 'react'
import {
    MessageFilled,
    PlusCircleFilled,
} from '@ant-design/icons'
import Search from 'antd/lib/input/Search';
import axios from 'axios'
import APIS from '../../apis/APIS';
import { useEffect } from 'react';

// const data = [
//     {
//         title: 'Ant Design Title 1',
//     },
//     {
//         title: 'Ant Design Title 2',
//     },
//     {
//         title: 'Ant Design Title 3',
//     },
//     {
//         title: 'Ant Design Title 4',
//     },
// ];

export default function Messages() {

    const [data, setdata] = useState([]);

    const fetchData = () => {
        axios.get(APIS.message.GET_ALL)
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
          <Button icon={<PlusCircleFilled />}>Create a new message</Button>
        </div>
        <Search
          placeholder="input search text"
          allowClear
          style={{
            width: 300,
          }}
        />

      </div>
        <Card style={{ height: '65vh' }}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[<Button>Edit</Button>, <Button type='danger'>Delete</Button>]}>
                        <List.Item.Meta
                            avatar={<MessageFilled style={{ fontSize: 20 }} />}
                            title={<a href="https://ant.design">{item.id}</a>}
                            description={item.message}
                        />
                    </List.Item>
                )}
            />
        </Card>
        </>
    )
}
