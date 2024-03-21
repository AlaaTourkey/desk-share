import React from 'react'
import styles from './Login.module.css';
import phone1 from '../../home images/phone1.png'
import phone2 from '../../home images/phone2.png'
import { Formik, useFormik } from 'formik';


function Login() {

  function submitRegister(values) {
    console.log(values);
    console.log("doneeeeeeee");
  }

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitRegister
  })




  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            
            <div className="col-12 col-md-6 my-5 p-3">
              <div className="">
                <form onSubmit={formik.handleSubmit}>
                  

                  <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email && (
                      <div className="alert alert-danger">{formik.errors.email}</div>
                    )}
                  </div>

                  <label htmlFor="password">Password: </label>
                  <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' id='password' className='form-control my-3' />
                  {formik.errors.password && formik.touched.password ?
                    <div className="alert alert-danger">{formik.errors.password}</div> : " "}


                  <button type="submit" className={` ${styles.bgMain} btn`}>Login</button>
                </form>
              </div>
            </div>
            <div className={` ${styles.signbg} col-12 col-md-6  p-3`}>
              <div className=" w-100 mt-4">
                <img className={`${styles.phone1}   w-50`} src={phone1} alt="" />
                <img className={`${styles.phone2}  w-50`} src={phone2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>










      {/* <div className="py-5 mx-1 ">
          <div className={`${styles.header} container position-relative `}>
            <div className=" w-100 ">
              <div className="">
                <img className={`${styles.phone1}   position-absolute`} src={phone1} alt="" />
                <img className={`${styles.phone2}  position-absolute`} src={phone2} alt="" />
              </div>
              <div className={`${styles.headInfo} w-75  p-1`}>
                <h3 className='fs-2 w-50'>Flexible workspace solutions, simplified</h3>
                <p className={`${styles.font} ${styles.secondColor} w-50 fw-bold my-1 my-md-3 `}>Elevate work and productivity with on-demand workspaces around the globe.</p>
                <button className={`p-2 text-white ${styles.bgMain} ${styles.font} ${styles.btn} mt-5`}> Download The App </button>
              </div>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default Login