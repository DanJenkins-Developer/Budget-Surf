import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetProvider } from "./contexts/BudgetContext"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BudgetProvider>
  </React.StrictMode>
);


