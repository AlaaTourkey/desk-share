import React from 'react';
import styles from './Footer.module.css';
import dotsmoke from './footer-images/dotsmoke.png';
import logo from './footer-images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="div">
        <div className="container-fluid">
          <div className="row m-5">
            <div className={`${styles.footerimg} wow animate__animated animate__fadeIn`} data-wow-delay="0.5s">
              <div className={`${styles.center} text-center`}>
                <h2 className={styles.h2footer}>Desk Share</h2>
                <h2 className={styles.h2footer}>Hybrid Work Solution for Businesses</h2>
                <p className={`${styles.footertextt} text-center m-auto`}>
                  Get the most out of your hybrid team and office space.
                  Take data-driven decisions to save on leases and cut costs for a successful real estate and people strategy.
                  Schedule demo
                </p>
                <button type="button" className={`btn m-2 px-4 ${styles.footerbtn}`}>Download The App</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.allfooter}>
        <div className="container-fluid">
          <div className={`row ${styles.footerr}`}>
            <div className="col-lg-4 col-12">
              <div className="div">
                <img src={logo} className={styles.logo} alt="Logo" />
                <div className={styles.div2}>
                  <p className={styles.footerp}>Aplikasi terbaik layanan penginapan di seluruh apartemen dan hotel di Indonesia</p>
                  <div className={styles.sitelinkss}>
                    <i className="fa-brands fa-facebook mx-1"></i>
                    <i className="fa-brands fa-twitter mx-1"></i>
                    <i className="fa-brands fa-instagram mx-1"></i>
                    <i className="fa-brands fa-pinterest mx-1"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <h3 className={styles.linklabel}>Site Links</h3>
              <div className={styles.links}>
                <i className="fa-solid fa-caret-right d-inline-block m-2"></i>
                <Link to="#" onClick={() => handleLinkClick('/home')} className={styles.linksp}>Home</Link>
              </div>
              <div className={styles.links}>
                <i className="fa-solid fa-caret-right d-inline-block m-2"></i>
                <Link to="#" onClick={() => handleLinkClick('/blog')} className={styles.linksp}>Blog</Link>
              </div>
              <div className={styles.links}>
                <i className="fa-solid fa-caret-right d-inline-block m-2"></i>
                <Link to="#" onClick={() => handleLinkClick('/aboutus')} className={styles.linksp}>About Us</Link>
              </div>
              <div className={styles.links}>
                <i className="fa-solid fa-caret-right d-inline-block m-2"></i>
                <Link to="#" onClick={() => handleLinkClick('/contactus')} className={styles.linksp}>Contact</Link>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="div">
                <h3 className={styles.linklabel}>Tetap bersama kami</h3>
                <div className={`my-2 ${styles.links}`}>
                  <i className="fa-solid fa-map-pin d-inline-block m-2"></i>
                  <p className='d-inline'>Jakarta, Indonesia</p>
                </div>
                <div className={`my-2 ${styles.links}`}>
                  <i className="fa-solid fa-envelope d-inline-block m-2"></i>
                  <p className='d-inline'> Hello@Email.com</p>
                </div>
                <div className={`my-2 ${styles.links}`}>
                  <i className="fa-solid fa-square-phone d-inline-block m-2"></i>
                  <p className='d-inline'> ( +62 ) 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="div text-center py-2">
          <p>Copyright &copy; 2024 Desk Share | Powered by Desk Share</p>
        </div>
      </div>
    </div>
  );
}

