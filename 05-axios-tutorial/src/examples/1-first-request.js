import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  useEffect(() => {
    console.log('first axios request');
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
