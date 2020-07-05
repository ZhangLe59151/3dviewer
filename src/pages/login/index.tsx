import React, { useEffect } from 'react';
import { LoginForm } from 'components/loginForm';
import { Ilogin } from 'interface/requestBase';
import { useObserver } from 'mobx-react';
import agentStore from 'store/agent';
import { useTranslation } from 'react-i18next';
import NetworkStateNotifier from 'react-network-status-notifier';
import history from 'lib/history';
import instance from 'lib/axios';
import { IResponseCode, IAgentRole } from 'interface/base';
import { IResponseLogin } from 'interface/responseLogin';
import { Wrapper } from './styled';
import { Layout, Row, Col, Form, Input, Checkbox, Button, Divider, List, Typography } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const onChange = async (value: Ilogin) => {
  try {
    const response = await instance.post<IResponseLogin>('/login', value);
    // const response = await instance.get<IResponse>('/bot');
    // const response = await instance.request({method:"GET", url:"/bot"});
    if (response.data.code === IResponseCode.SUCCESS) {
      agentStore.updateLogin(response.data.data);
      jumpToFirstPage(response.data.data.agent.role);
      return false;
    } else {
      return true;
    }
  } catch (e) {
    console.error('error:', e);
  }
};

const jumpToFirstPage = (role: string) => {
  if (role === IAgentRole.ADMIN) {
    history.push('/main/adminmenu/');
  } else {
    history.push('/main/room/');
  }
};

const Login = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.history.pushState(null, '', document.URL);
    agentStore.logout();
  }, []);

  const onFinish = () => {};

  const onFinishFailed = () => {};

  const aiPlayerData = ['AI Player 1', 'AI Player 2'];

  return useObserver(() => (
    <div>
      <NetworkStateNotifier offlineMessage={t('Offline Msg')} onlineMessage={t('Online Msg')} />
      {/* <LoginForm onChange={onChange} /> */}
      <Layout>
        <Header style={{ textAlign: 'center', color: '#ffffff' }}>
          {t('Welcome to Monopoly Game')}
        </Header>
        <Content>
          <Wrapper>
            <div className="site-layout-content">
              <Row>
                <Col span={12}>
                  <div className="left-plane">
                    <Form
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label={t('Username')}
                        name="username"
                        rules={[{ required: true, message: t('UserNamePlacehold') }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>{t('Remember me')}</Checkbox>
                      </Form.Item>

                      <Form.Item>
                        <Button block type="primary" htmlType="submit">
                          {t('StartGame')}
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="right-plane">
                    <Divider orientation="center">{t('aiPlayerHead')}</Divider>
                    <List
                      bordered
                      dataSource={aiPlayerData}
                      renderItem={(item) => (
                        <List.Item>
                          <Typography.Text mark>[{t('Player')}]</Typography.Text> {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Wrapper>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{t('Game Version')}</Footer>
      </Layout>
    </div>
  ));
};

export default Login;
