import React from 'react'
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import Footer from "../Footer/Footer";

export default function Masterlayout({userData,setuserData}) {
  return (
    <>
      <Navbar  setuserData={setuserData} userData={userData}/>
      <Outlet></Outlet>
      <Footer />
    </>
  )
}
