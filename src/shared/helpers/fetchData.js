import yelp from 'shared/api/yelp';

const fetchData = async (location) => {
  const response = await yelp.get('/businesses/search', {
    params: {
      location,
      term: 'tacos',
      limit: 5,
    },
  });
  console.log(response.data.businesses);
};

export default fetchData;
