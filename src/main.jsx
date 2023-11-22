import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Home from './mainContent/home/home.jsx';
import Destination from './mainContent/destination/destination.jsx';
import Crew from './mainContent/crew/crew.jsx';
import Technology from './mainContent/technology/technology.jsx';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "destination",
    element: <Destination />
  }
]);*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Página de Erro
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Home />
    },{
      path: "/destination",
      element: <Destination />
    },{
      path: "/crew",
      element: <Crew />
    },{
      path: "/technology",
      element: <Technology />
    }]
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
