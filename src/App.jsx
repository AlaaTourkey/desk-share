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
import DashBoardPage from '../src/components/Dashboard/DashBoardPage.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import { Toaster } from 'react-hot-toast';
import { jwtDecode } from "jwt-decode";
import WorkSpace from './components/Dashboard/WorkSpace.jsx';
import Requests from './components/Dashboard/Requests.jsx';
import WorkspaceForm from './components/Dashboard/WorkspaceForm.jsx';
import AllWorkspaces from './components/Dashboard/AllWorkspaces.jsx';
import WOW from 'wowjs';
import 'animate.css/animate.css';
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
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Masterlayout saveUserData={saveUserData} userData={userData} />,
      errorElement: <Notfound />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'aboutus', element: <About /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'blog', element: <Blog /> },
        { path: 'Workspaces', element: <ProtectedRoute ><AllWorkspaces /></ProtectedRoute> },
        { path: 'Signup', element: <Signup /> },
        { path: 'Login', element: <Login saveUserData={saveUserData} /> },
      ]
    },
    {
      path: "DashBoardPage",
      element: <ProtectedRoute userData={userData}><DashBoardPage /></ProtectedRoute>,
      children: [
        {
          path: '',
          element: <ProtectedRoute userData={userData}><WorkspaceForm /></ProtectedRoute>
        },
        {
          path: "workspaces",
          element: <ProtectedRoute userData={userData}><AllWorkspaces /></ProtectedRoute>
        },
        {
          path: "requests",
          element: <ProtectedRoute userData={userData}><Requests /></ProtectedRoute>
        },
        {
          path: "addworkspace",
          element: <ProtectedRoute userData={userData}><WorkspaceForm /></ProtectedRoute>
        },
        {
          path: "Workspaces/:id",
          element: <ProtectedRoute userData={userData}><WorkSpace /></ProtectedRoute>
        }
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


