import React from 'react';

import Header from 'App/Header';
import fetchData from 'shared/helpers/fetchData';
import GlobalStyle from 'shared/styles/GlobalStyle';

import Input from './Input';
import Layout from './Layout';
import Results from './Results';

const App = () => {
  fetchData();
  return (
    <>
      <Header />
      <Layout>
        <Input />
        <Results />
      </Layout>
      <GlobalStyle />
    </>
  );
};

export default App;
