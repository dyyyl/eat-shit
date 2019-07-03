import React from 'react';

import Header from 'shared/components/Header';
import fetchData from 'shared/helpers/fetchData';
import GlobalStyle from 'shared/styles/GlobalStyle';
import Layout from './Layout';

const App = () => {
  fetchData();
  return (
    <>
      <Header />
      <Layout />
      <GlobalStyle />
    </>
  );
};

export default App;
