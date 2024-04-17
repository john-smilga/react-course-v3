import { useEffect } from 'react';
import authFetch from '../axios/interceptors';
const url = 'https://www.course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-products');
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
