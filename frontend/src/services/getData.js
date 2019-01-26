import axios from 'axios';

const urlBase = 'http://localhost:9000';

const getStates = () => {
  return axios.get(`${urlBase}/api/v1/states`);
};

const getCities = (state) => {
  return axios.get(`${urlBase}/api/v1/cities?state=${state}`);
};

export { getStates, getCities };
