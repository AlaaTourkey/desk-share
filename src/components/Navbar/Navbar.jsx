import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Nav-images/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
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
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-4 m-3" to="/home">Home</NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-4 m-3" to="/Bussiness">For business</NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-4 m-3" to="/aboutus">About</NavLink>
                </li>
                <li className={`nav-item  ${styles.item}`}>
                  <NavLink className="nav-link px-4 m-3 " to="/blog">Blog</NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                  <NavLink className="nav-link px-4 m-3" to="/contactus">Contact Us</NavLink>
                </li>
               
             
              </ul>
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex align-items-center ">
                <li className="nav-item ">
                  <button type="button" className={`btn m-2   ${styles.buttonnav}`}> For workspaces</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  );
}








