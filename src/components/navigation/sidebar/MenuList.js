import {
    MessageFilled,
    FolderOpenFilled,
    SettingFilled,
    UserOutlined,
  } from '@ant-design/icons';

export const menuitems = [
    getItem('Users', 'sub1', <UserOutlined />, [
        getItem('Register', '1'),
        getItem('View All', '2'),
    ]),
    getItem('Files', '3', <FolderOpenFilled />),
    getItem('Messages', '4', <MessageFilled />),
    getItem('Settings', '5', <SettingFilled />),
];

export function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}