import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div className="h-screen-full min-w-full bg-slate-400 flex flex-col">
    <App />
  </div>
  // </React.StrictMode>
);
