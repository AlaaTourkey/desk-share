import React, { useState } from 'react'
import styles from './Login.module.css';
import phone1 from '../../home images/phone1.png'
import phone2 from '../../home images/phone2.png'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { date } from 'yup';


function Login() {

  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [workspaceToken, setWorkspaceToken] = useState(null);

  //  submitLogin function
  async function submitLogin(values) {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';


    let { data } = await axios.post(`https://desk-share-api.onrender.com/admin/login`, values, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    }).catch((error) =>
      setError(error.response.data.error),
      setIsLoading(false),
    );
    if (data.status == true) {
        setIsLoading(false);
        toast.success(data.message)
        toast.success("you should signin every 7 days")
        localStorage.setItem("workspaceToken", data.token);
        setWorkspaceToken(data.token)
        navigate('/home')
    }
    console.log();

 
  }

  

  let validateSchema = Yup.object({
    email: Yup.string().email('email is invalid').required('email is required'),
    password: Yup.string().matches(/^[a-zA-Z0-9]{6,}$/,'Password should consist of at least 6 numerical.'
    ).required('Password is required'),


  })



  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    }, validationSchema: validateSchema,
    onSubmit: submitLogin
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

                  <button disabled={!(formik.isValid)} type='submit' className={` ${styles.bgMain} btn`} >{isLoading ? <i class="fas fa-spinner spin   "></i> : "Login"}</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>











    </>
  )
}

export default Login;