import { Card, Col, Row, Button, Checkbox, Form, Input } from 'antd'
import { Typography } from 'antd'
import React from 'react'
import logo from '../../assets/images/logo_large.png'

const { Title } = Typography

export default function Login() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100%' }}>
      <Card
        style={{
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          height: '50vh',
          width: '40vw',
        }}
      >
        <Row>
          <Col xs={3}>
            <img
              src={logo}
              alt="logo"
              style={{
                position: 'relative',
                transform: 'translate(-50%, -50%)',
                top: '35%',
                width: '10rem',
                marginTop: 30,
              }}
            />
          </Col>
          <Col xs={18} style={{ padding: 40 }}>
            <Title level={3}>SIGN IN</Title>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
