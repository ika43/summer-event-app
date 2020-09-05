import axios from 'axios';

export const doGet = (url, params) => axios.get(url, { params });
