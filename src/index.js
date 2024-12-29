import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Front from './component/Front/Front';
import Login from './component/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './component/Signup/Signup';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Front/>,
  },
  {
    path: 'login',
    element: <Login/>,
  },
  {
    path: 'signup',
    element: <Signup/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
