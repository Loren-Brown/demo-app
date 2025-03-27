import React from 'react';
import './App.css';

import {RouterProvider,  DataRouter, createBrowserRouter } from "react-router";

import AppLayout from './components/AppLayout/AppLayout';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import Analytics from './components/Analytics/Analytics';

function App() {
  const browserRouter: DataRouter = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "favorites",
              element: <Favorites />,
          },
          {
              path: "analytics",
              element: <Analytics />,
          }
        ],
    },
  ]);

  return (
    <RouterProvider router = { browserRouter }/>
  );
}

export default App;
