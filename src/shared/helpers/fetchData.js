import yelp from 'shared/api/yelp';

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

export default fetchData;
