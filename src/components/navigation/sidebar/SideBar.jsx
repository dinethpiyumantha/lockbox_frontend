import React, { useState } from 'react'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { menuitems } from './MenuList';
import LargeLogo from "../../../assets/images/logo_large.png";
import SmallLogo from "../../../assets/images/logo_small.png";

import {
    DoubleRightOutlined,
    DoubleLeftOutlined,
} from '@ant-design/icons';
import Constants from '../../../utils/Constants';

const { Sider } = Layout;

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider collapsed={collapsed} onCollapse={value => setCollapsed(value)} 
            style={{
                position: 'relative',
                height: '100%',
                background: "linear-gradient(0deg, hsla(137, 100%, 5%, 1) 0%, hsla(119, 100%, 15%, 1) 100%)"
            }}>
            <Tooltip title="Toggle">
                <Button shape="circle" 
                    icon={collapsed? <DoubleRightOutlined /> : <DoubleLeftOutlined /> } 
                    onClick={toggleCollapsed} 
                    style={{
                        background: 'none',
                        color: '#ffffff',
                        border: 'none',
                        marginTop: 20,
                        position: 'relative',
                        transform: 'translate(-50%, 0)',
                        left: '50%'
                    }} />
            </Tooltip>
            <img src={ collapsed ? SmallLogo : LargeLogo } alt="logo" style={{
                position: 'relative',
                width: '100%',
                marginTop: 30
            }} />
            <Menu  theme="light" defaultSelectedKeys={['1']} mode="inline" items={menuitems} 
                style={{
                    transform: 'translate(0, -50%)',
                    top: '20%',
                    position: 'relative',
                    zIndex: 1000
                }} />
            { !collapsed && <p style={{
                position: 'relative',
                padding: 20,
                textAlign: 'center',
                color: '#c2bebb'
            }}>{ Constants.DESCRIPTION }</p>}
        </Sider>
    )
};
