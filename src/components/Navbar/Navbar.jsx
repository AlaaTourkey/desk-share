import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './Nav-images/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logout() {
    localStorage.removeItem('workspaceToken'); 
    setIsLoggedIn(false); 
    navigate('/Login'); 
    console.log('null');
  }

  return (
    <div className={styles.allnav}>
      <div className="container-fluid">

        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
                <img src={logo} className={styles.logo} alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto  ">
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-2 m-1" to="/home">Home</NavLink>
                </li> 
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-2 m-1" to="/aboutus">About</NavLink>
                </li>
                <li className={`nav-item  ${styles.item}`}>
                  <NavLink className="nav-link px-2 m-1 " to="/blog">Blog</NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-2 m-1" to="/contactus">Contact Us</NavLink>
                </li>
                  
              </ul>
              <ul className="navbar-nav ms-auto  ">
                <li className="nav-item ">
                  <button type="button" className={`btn m-2   ${styles.buttonnav}`}> For workspaces</button>
                </li>
                <li>
                <NavLink onClick={logout} className="nav-link px-2 m-1 " to="Login">Logout</NavLink>
                </li>
                <li>
                <NavLink className="nav-link px-2 m-1" to="/Signup">SignUp</NavLink>
                </li>
                <li>
          {isLoggedIn ? (
            <NavLink onClick={logout}>Logout</NavLink>
          ) : (
            <NavLink className="nav-link px-2 m-1" to="/Login">Login</NavLink>
          )}
        </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  );
}








