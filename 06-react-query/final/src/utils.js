import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default customFetch;
