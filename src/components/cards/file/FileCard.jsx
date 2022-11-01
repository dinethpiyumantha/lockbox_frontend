import { Card, Space } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import {
    FilePdfFilled,
} from '@ant-design/icons'

export default function FileCard({ thumbnail }) {
    return (
        <>
            {getCard(thumbnail)}
        </>
    )
}


const getCard = (thumbnail) => {
    if (thumbnail) {
        return (
            <Card hoverable
                cover={<FilePdfFilled style={{
                    fontSize: 80,
                    marginTop: 20,
                    color: '#001b07',
                }} />}
                style={{
                    width: 120,
                    height: 150,
                }}>
                <Meta description="standard.pdf" style={{ margin: 0 }} />
            </Card>
        );
    } else {
        return (
            <Card hoverable
                style={{
                    width: '100%',
                }}>
                <Space>
                    <FilePdfFilled style={{ fontSize: 30, color: '#001b07' }} />
                    <Meta description="standard.pdf" style={{ margin: 0 }} />
                </Space>
            </Card>
        )
    }
}