import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ProvideSidebar } from './context/useSidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideSidebar>
        <App />
      </ProvideSidebar>
    </BrowserRouter>
  </React.StrictMode>
);
