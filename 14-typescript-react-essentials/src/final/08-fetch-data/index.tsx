import { fetchTours } from './types';
import { useQuery } from '@tanstack/react-query';

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading...</h2>;
  if (isError) return <h2>Error : {error.message} </h2>;
  return (
    <div>
      <h2 className='mb-1'>Tours </h2>
      {tours.map((tour) => {
        return (
          <p className='mb-1' key={tour.id}>
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;
