import React, { useState, PropsWithChildren } from 'react';
import { Layout, Switch, Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import history from 'lib/history';
import instance, { ignore } from 'lib/axios';
import { IResponse } from 'interface/base';
import agentStore from 'store/agent';
import clientStore from 'store/client';
import setLan from 'store/language';
import i18n from 'i18n';

const { Header, Content, Footer } = Layout;

const logout = async () => {
  const value = { agentId: agentStore.data.agentId };
  const responseClient = await ignore.post<IResponse<null>>('/logout', value);
  agentStore.logout();
  clientStore.removeClient();
  history.push('/login');
};

const chagnelanguage = () => {
  setLan.updateLang();
};

export const MenuList = () => (
  <Menu>
    <Menu.Item key="0">
      <button id="changeLng" onClick={chagnelanguage}>
        {' '}
        {i18n.t('Switch Language')}{' '}
      </button>
    </Menu.Item>
    <Menu.Item key="1">
      <button id="logout" onClick={logout}>
        {' '}
        {i18n.t('Logout')}{' '}
      </button>
    </Menu.Item>
  </Menu>
);

export const Screen: React.FC<PropsWithChildren<{}>> = (props) => (
  <StyledWrapper>
    <Header className="screen-header">
      <img className="srceen-imgAudio" src={require('assets/images/whiteAudio.png')} />
      <div className="screen-title">{i18n.t('Platform')} </div>
      <img className="srceen-imgClient" src={require('assets/images/clientIcon.png')} />
      <Dropdown overlay={MenuList} trigger={['click']}>
        <a className="dropdown-link" href="#">
          <span>
            <i className="downicon" />
          </span>
          <span className="agent-name">{agentStore.fetchAgent() || 'Agent 0'} </span>
        </a>
      </Dropdown>
    </Header>
    <Content className="screen-content">
      <div className="screen-content-wrapper">{props.children}</div>
    </Content>
    <Footer className="screen-footer">3D viewer ©2020 Created</Footer>
  </StyledWrapper>
);

const StyledWrapper = styled(Layout)`
  min-height: 100vh;

  .screen-header {
    position: relative;
    width: 100%;
    height: 53px;
    background: rgba(54, 63, 72, 1);

    .srceen-imgAudio {
      position: absolute;
      margin: 10px 0 0 32px;
      width: 28px;
      height: 34px;
    }

    .screen-title {
      position: absolute;
      margin: 0 0 0 70px;
      width: 208px;
      height: 25px;
      font-size: 22px;
      font-family: Arial-BoldMT, Arial;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      line-height: 53px;
    }

    .screen-switch {
      position: absolute;
      top: 8px;
      right: 32px;
      width: 94px;
    }

    .srceen-imgClient {
      position: absolute;
      right: 150px;
      top: 10px;
      width: 30px;
      height: 30px;
    }

    .dropdown-link {
      position: absolute;
      right: 80px;
      width: 58px;
      height: 53px;
      font-size: 13px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 53px;
    }

    .downicon {
      position: absolute;
      margin: 20px 0 0 0px;
      border: solid #fff;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    .agent-name {
      position: absolute;
      margin: 0 0 0 20px;
      width: 80px;
    }

    .dropdown-link-2 {
      position: absolute;
      right: 140px;
      width: 58px;
      height: 53px;
      font-size: 13px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 53px;
    }
  }

  .screen-content {
    margin: 0 0 0 0;

    .screen-content-wrapper {
      background: #ffffff;
      min-height: 560px;
    }
  }

  .screen-footer {
    text-align: center;
  }
`;
