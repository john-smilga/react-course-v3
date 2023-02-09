import { useState } from 'react';

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img src='/vite.svg' alt='' />
    </div>
  );
});

const SlowComponent = () => {
  const [items, setItems] = useState(newItems);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '2rem',
      }}
    >
      {items}
    </div>
  );
};
export default SlowComponent;
