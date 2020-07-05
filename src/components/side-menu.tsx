import React from 'react';
import history from 'lib/history';
import { Layout, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { UserOutlined, ProfileOutlined, SnippetsOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export const SideMenu = () => {
  const handleClick = React.useCallback((params: ClickParam) => {
    const { keyPath } = params;
    const to = `/main/${keyPath.reverse().join('/')}`;
    history.push(to);
  }, []);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} onClick={handleClick}>
        <Menu.SubMenu key="dashboard" title="Dashboard">
          <Menu.Item key="a">
            <span className="nav-text">Dashboard A</span>
          </Menu.Item>
          <Menu.Item key="b">
            <span className="nav-text">Dashboard B</span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="user">
          <UserOutlined />
          <span className="nav-text">User</span>
        </Menu.Item>
        <Menu.Item key="call">
          <ProfileOutlined />
          <span className="nav-text">Call List</span>
        </Menu.Item>
        <Menu.Item key="detail">
          <SnippetsOutlined />
          <span className="nav-text">Detail</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
