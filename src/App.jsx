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
import DashBoardPage from './components/Dashboard/DashBoardPage.jsx';
import { jwtDecode } from "jwt-decode";


export default function App() {

  useEffect(() => {
    if (localStorage.getItem('workspaceToken')) {
      saveUserData()
    }
  }, []);

  const [userData, setuserData] = useState(null);
  
  // to handle refresh 
  function saveUserData() {
    let workspaceToken = localStorage.getItem('workspaceToken')
    const decodedToken = jwtDecode(workspaceToken);
    setuserData(decodedToken)
    console.log(decodedToken);
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Masterlayout saveUserData={saveUserData} userData={userData} />,
      errorElement: <Notfound />,
      children: [
        { path: '/', element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'home', element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'aboutus', element: <ProtectedRoute userData={userData}><About /></ProtectedRoute> },
        { path: 'contactus', element: <ProtectedRoute userData={userData}><ContactUs /></ProtectedRoute> },
        { path: 'blog', element: <ProtectedRoute userData={userData}><Blog /></ProtectedRoute> },
        { path: 'Signup', element:<Signup />},
        { path: 'Login', element:<Login saveUserData={saveUserData} /> },
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


