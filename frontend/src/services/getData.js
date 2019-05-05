import axios from 'axios';

const urlBase = process.env.API_HOST || `https://blackdevs.com.br:9000`;

const getStates = () => {
  return axios.get(`${urlBase}/api/v1/states`);
};

const getCities = (state) => {
  return axios.get(`${urlBase}/api/v1/cities?state=${state}`);
};

export { getStates, getCities };
