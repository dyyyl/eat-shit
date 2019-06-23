import React from 'react';

import yelp from 'shared/api/yelp';
import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  const fetchData = async () => {
    const response = await yelp.get('/businesses/search', {
      params: {
        location: 'berlin',
        term: 'tacos',
        limit: 5,
      },
    });
    console.log(response);
  };

  fetchData();
  return (
    <>
      <h1>
        Eat Shit{' '}
        <span role="img" aria-label="kiss">
          😘
        </span>
      </h1>
      <GlobalStyle />
    </>
  );
};

export default App;
