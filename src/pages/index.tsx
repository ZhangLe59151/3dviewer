import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
// import { SideMenu } from 'components/side-menu';
import { Screen } from 'components/screen';
import PageRoutes from './routes';
import Login from './login';
import GameMap from './map/index';

const Main = () => {
  return (
    <Layout>
      <Screen>
        <PageRoutes />
      </Screen>
    </Layout>
  );
};

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/map" component={GameMap} />
      <Route path="/main/:component*" component={Main} />
      <Route render={() => <Redirect to={'/'} />} />
    </Switch>
  );
};

export default Pages;
