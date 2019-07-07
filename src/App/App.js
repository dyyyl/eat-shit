import React from 'react';

import Header from 'App/Header';
import GlobalStyle from 'shared/styles/GlobalStyle';

import Location from './Location';
import Layout from './Layout';
import Results from './Results';

const App = () => (
  <>
    <Header />
    <Layout>
      <Location />
      <Results />
    </Layout>
    <GlobalStyle />
  </>
);

export default App;
