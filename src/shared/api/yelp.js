import axios from 'axios';

const yelp = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP}`,
  },
});

export default yelp;
