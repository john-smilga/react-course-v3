import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
});

authFetch.interceptors.request.use(
  (request) => {
    // old version
    // request.headers.common['Accept'] = 'application/json';
    request.headers['Accept'] = 'application/json';

    console.log('request sent');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);

export default authFetch;
