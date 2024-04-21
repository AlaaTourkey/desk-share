import './App.css';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Masterlayout from './components/Masterlayout/Masterlayout.jsx';
import Home from './components/Home/home.jsx';
import Blog from './components/blog/Blog.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Notfound from './components/Notfound/notfound.jsx';
import About from './components/AboutUs/about.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  useEffect(() => {
    if (localStorage.getItem('workspaceToken') != null) {
     
    }
  }, []);

  const [userData, setuserData] = useState(null);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Masterlayout setuserData={setuserData} userData={userData} />,
      errorElement: <Notfound />,
      children: [
        { path: '/', element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'home', element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'aboutus', element: <ProtectedRoute userData={userData}><About /></ProtectedRoute> },
        { path: 'contactus', element: <ProtectedRoute userData={userData}><ContactUs /></ProtectedRoute> },
        { path: 'blog', element: <ProtectedRoute userData={userData}><Blog /></ProtectedRoute> },
        { path: 'Signup', element:<Signup />},
        { path: 'Login', element:<Login /> },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}


