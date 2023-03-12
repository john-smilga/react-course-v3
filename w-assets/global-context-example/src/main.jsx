import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './context';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
