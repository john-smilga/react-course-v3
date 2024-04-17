import { useEffect } from 'react';
import axios from 'axios';
const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl);
      const resp2 = await axios(randomUserUrl);
      console.log(resp1);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
