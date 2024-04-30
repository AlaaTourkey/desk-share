import React from 'react';
import styles from './contact.module.css';
import dotsmoke from './contact-images/dotsmoke.png'
export default function ContactUs() {
  return (
    <div>
      <div className={styles['header']}>
        <div className={styles['header-caption']}>
          <h2 className='fw-bold'> Contact US</h2>
          <p className={styles['cap']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      {/* ========================================================= */}
      <div>
        <div className="container ">
          <div className="row my-5 ">
            <div className={`col-md-6 p-4 rounded-4 ${styles.form}`}>
              <div className="row">
                <h5>Contact Us</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="row ">
                <div className="col-6">
                  <label htmlFor="inputEmail1" className="form-label">First Name</label>
                  <input type="text" className="form-control rounded-5 " placeholder="First name" aria-label="First name" />
                </div>
                <div className="col-6">
                  <label htmlFor="inputEmail2" className="form-label">Last Name</label>
                  <input type="text" className="form-control rounded-5 " placeholder="Last name" aria-label="Last name" />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-6">
                  <label htmlFor="inputEmail3" className="form-label">Email Address</label>
                  <input type="email" className="form-control rounded-5 " placeholder="Hello@email" id="inputEmail3" />
                </div>
                <div className="col-6">
                  <label htmlFor="inputState" className="form-label ">Subjek</label>
                  <select id="inputState" className="form-select rounded-5">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="row my-4">
                <div className="col">
                  <label htmlFor="exampleFormControlTextarea1" className="form-floating ">Example textarea</label>
                  <textarea className="form-control rounded-4 " id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

              <button type="button" className={`btn m-2  px-4 ${styles.contactbtn}`}>Send Message</button>

            </div>
            <div className={`col-md-6 px-5 ${styles.info}`}>
              <div className="div d-flex">
                <img src={dotsmoke} className={styles.imgform} alt="" srcset="" />
              </div>
              <p className={styles.pinfo}>tetap bersama kami</p>
              <h5 >Contact Us</h5>
              <p className={styles.p2}>Jangan ragu untuk meminta konsultasi atau bertanya lansung saja hubungi kami </p>

              <div className={`iconcontact ${styles.iconcontact}`}>
                <i className={`fa-solid fa-map d-inline ${styles.iconsize}`}></i>
                <div className={`div d-inline-block ${styles.div}`}>
                  <h6 className={styles.iconh6}>Tempat Kami</h6>
                  <p className={styles.iconp}>Jakarta, Indonesia</p>
                </div>
              </div>
              <div className={`iconcontact ${styles.iconcontact}`}>
                <i className={`fa-solid fa-envelope ${styles.iconsize}`}></i>
                <div className={`div d-inline-block ${styles.div}`}>
                  <h6 className={styles.iconh6}>Email Address</h6>
                  <p className={styles.iconp}>Hello@Email.com </p>
                </div>
              </div>
              <div className={`iconcontact ${styles.iconcontact}`}>
                <i className={`fa-solid fa-square-phone d-inline ${styles.iconsize}`}></i>
                <div className={`div d-inline-block ${styles.div}`}>
                  <h6 className={styles.iconh6}>Telephone</h6>
                  <p className={styles.iconp}> ( +62 ) 123 456 789 </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


