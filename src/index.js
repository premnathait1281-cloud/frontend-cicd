import React from 'react';
import ReactDOM from 'react-dom/client';
import BmiCalculator from './BmiCalculator';
import './BmiCalculator.css'; // optional styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BmiCalculator />
  </React.StrictMode>
);
