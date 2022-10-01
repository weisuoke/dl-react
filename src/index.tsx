import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './tailwindcss.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
