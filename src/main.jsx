import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ArticleProvider } from './ArticleContext/ArticleContext.jsx'; // Add this
import Layout from '../Layout.jsx';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import General from './pages/General';
import Health from './pages/Health';
import Nation from './pages/Nation';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import World from './pages/World';
import Body from './components/Body.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // This will be the layout with Header and Footer
    children: [
      { path: '/', element: <Body /> }, // This will render the Body component at the root path
      { path: '/business', element: <Business /> },
      { path: '/entertainment', element: <Entertainment /> },
      { path: '/general', element: <General /> },
      { path: '/health', element: <Health /> },
      { path: '/nation', element: <Nation /> },
      { path: '/science', element: <Science /> },
      { path: '/sports', element: <Sports /> },
      { path: '/technology', element: <Technology /> },
      { path: '/world', element: <World /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticleProvider> {/* Wrap App with ArticleProvider */}
      <RouterProvider router={router} />
    </ArticleProvider>
  </StrictMode>,
);
