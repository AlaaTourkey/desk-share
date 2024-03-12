import './App.css';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Masterlayout from './components/Masterlayout/Masterlayout.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/blog/Blog.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import AboutUs from './components/AboutUs/About.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import Forbusiness from './components/ForBusiness/Forbusiness.jsx';


export default function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <Masterlayout/>,
      errorElement: <Notfound />
      , children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'aboutus', element: <AboutUs /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'blog', element: <Blog /> },
        { path: 'ForBusiness', element: <Forbusiness /> }
      ]
    }
  ])



  return (
    <div >
      <RouterProvider router={routes} />
    </div>
  );
}