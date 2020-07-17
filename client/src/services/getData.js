import axios from 'axios';

const getStates = () => {
  return axios.get('/api/v1/states');
};

const getCities = (state) => {
  return axios.get(`/api/v1/cities?state=${state}`);
};

export { getStates, getCities };
