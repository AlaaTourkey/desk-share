import React, { useState } from 'react'
import styles from './Signup.module.css';
import phone1 from '../../home images/phone1.png'
import phone2 from '../../home images/phone2.png'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { date } from 'yup';


function Signup() {

  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //  submitRegister function
  async function submitRegister(values) {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';


    let { data } = await axios.post(`https://desk-share-api.onrender.com/admin/signup`, values, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    })
    console.log(data);
    if (data.status == "true") {
      navigate('/Login')
      console.log("sucesssss");
      toast.success(data.message)
    }else{
      toast(data.message)
      setError(data.errors.email);
    }

  }

  let validateSchema = Yup.object({
    name: Yup.string().min(3, 'name minlingth is 3').max(20, 'name maxlingth is 20').required('name is required'),
    email: Yup.string().email('email is invalid').required('email is required'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])/,'Password should contain at least one uppercase or lowercase letter.')
      .matches(
        /[A-Za-z\d@$!%*?&]{6,}/,
        'Password should consist of at least 6 characters.'
      ).required('Password is required'),


  })



  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    }, validationSchema: validateSchema,
    onSubmit: submitRegister
  })



  return (
    <>
      <section className="">
        <div className="container">
          <div className="mx-auto">
            {error ? <div className="alert alert-danger h5 ">{error}</div> : null}
          </div>
          <div className="row">
            <div className={` ${styles.signbg} col-12 col-md-6  p-3`}>
              <div className=" w-100 mt-4">
                <img className={`${styles.phone1}   w-50`} src={phone1} alt="" />
                <img className={`${styles.phone2}  w-50`} src={phone2} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 mt-5 p-3">
              <div className="">
                <form onSubmit={formik.handleSubmit}>
                  <div className="">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text" id="name" name="name" className="form-control mb-3" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.name && formik.touched.name && (
                      <div className="alert alert-danger">{formik.errors.name}</div>
                    )}
                  </div>


                  <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email && (
                      <div className="alert alert-danger">{formik.errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password">Password: </label>
                    <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type='password' name='password' id='password' className='form-control my-3' />
                    {formik.errors.password && formik.touched.password ?
                      <div className="alert alert-danger">{formik.errors.password}</div> : " "}

                  </div>

                  <button disabled={!(formik.isValid)} type='submit' className={` ${styles.bgMain} btn`} >{isLoading ? <i class="fas fa-spinner spin   "></i> : "Register"}</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>











    </>
  )
}

export default Signup