'use client';

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>there was an error...</div>;
}
export default error;
