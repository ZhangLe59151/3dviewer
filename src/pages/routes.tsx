import React from 'react';
import LazyImport from 'lib/lazy';
import { Switch, Route, Redirect } from 'react-router-dom';

const VideoCallPage = () => <LazyImport load={() => import('pages/login/index')} />;
const GameMap = () => <LazyImport load={() => import('pages/map/index')} />;

const PageRoutes = () => (
  <Switch>
    <Route path="/videocall" component={VideoCallPage} />
    <Route path="/GameMap" component={GameMap} />
  </Switch>
);

export default PageRoutes;
