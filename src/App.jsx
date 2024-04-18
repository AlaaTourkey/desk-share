import './App.css';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Masterlayout from './components/Masterlayout/Masterlayout.jsx';
import Home from './components/Home/home.jsx';
import Blog from './components/blog/Blog.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Notfound from './components/Notfound/notfound.jsx';
import About from './components/AboutUs/about.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <Masterlayout/>,
      errorElement: <Notfound />
      , children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'aboutus', element: <About /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'blog', element: <Blog /> },
        { path: 'Signup', element: <Signup /> },
        { path: 'Login', element: <Login /> },

      ]
    }
  ])



  return (
    <div >
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}