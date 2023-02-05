import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Builds from './routes/builds';
import Roll from './routes/roll';
import Guide from './routes/guide';
import FeralDruid from './routes/feral-druid';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Builds />,
      },
      {
        path: "roll",
        element: <Roll />,
      },
      {
        path: ":build",
        element: <Guide />,
      },
      {
        path: "feral-druid",
        element: <FeralDruid />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
