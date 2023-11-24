//import React modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//import css
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

//import page components for the routes to use
import App from './App.jsx'
import Home from './components/pages/home/Home.jsx'
import Portfolio from './components/pages/portfolio/Portfolio.jsx'
import About from './components/pages/about/About.jsx'
import Contact from './components/pages/contact/Contact.jsx'
import Resume from './components/pages/resume/Resume.jsx'
import Error from './components/pages/error/Error.jsx'

//define the router itself
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path:'home',
        element:<Home />
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ],
    },
]);

//render the site with the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
