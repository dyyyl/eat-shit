import React from 'react';

import Header from 'shared/components/Header';
import fetchData from 'shared/helpers/fetchData';
import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  fetchData();
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};

export default App;
