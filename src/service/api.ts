import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: '5e3a728896ac5d08c92a18e55cb13c5c',
    lang: 'pt_br',
    units: 'metric',
  },
});
