import React from 'react';
import ReactDOM from 'react-dom/client';

const App =()=>"Hello world"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
