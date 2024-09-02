import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import React from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);