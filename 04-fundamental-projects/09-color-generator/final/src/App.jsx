import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
