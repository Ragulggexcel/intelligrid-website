import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Routers';

export default function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}
