import * as React from 'react';
import history from 'lib/history';
import Pages from 'pages';
import { Router } from 'react-router-dom';
import { loadLocale } from 'lib/moment';
import { GlobalStyle } from 'components/global-style';
import { Normalize } from 'styled-normalize';
import 'assets/favicon.ico';

loadLocale();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router history={history}>
        <Pages />
      </Router>
    </>
  );
};

const AppHot =
  process.env.NODE_ENV !== 'production' ? require('react-hot-loader/root').hot(App) : App;

export default AppHot;
