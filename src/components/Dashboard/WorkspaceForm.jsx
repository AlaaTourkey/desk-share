import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import * as yup from 'yup';


function WorkspaceForm() {

    const token = localStorage.getItem('workspaceToken');
    const [countries, setCountries] = useState();
    const [cities, setCities] = useState();

    // Headers
    const headers = {
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8',
        'Content-Type': 'application/json',
        'Authorization': token
    };


    async function addWorkspace(values) {
        try {
            let data = await axios.post('https://desk-share-api.onrender.com/admin/workspaces', values, { headers });
            toast.success(data.data.message)
            console.log(data);
        } catch (error) {
            console.log(error.response.data.errors);
            toast.error(error.response.data.errors)
        }
    }


    // choose Country
    async function handleCountry() {
        try {
            let data = await axios.get('https://desk-share-api.onrender.com/api/countries', { headers });
            setCountries(data.data)
        } catch (error) {
            console.log(error);
        }
    }


    // choose City
    async function handleCities() {
        try {
            let data = await axios.get('https://desk-share-api.onrender.com/api/cities?country_id=65ea2167eedefdf87f991d35', { headers });
            setCities(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        handleCities()
        handleCountry()
        // console.log(cities);
        // console.log(countries);
    }, []);


    const formik = useFormik({
        initialValues: {
            "name": "",
            "country": "",
            "city": "",
            "address": ""
        },
        onSubmit: addWorkspace
    });

    return (
        <div className='p-4'>
            <h1>Register your Workspace</h1>
            <form className='p-5 fs-6' onSubmit={formik.handleSubmit} >
                <div className='mb-2'>
                    <label htmlFor="name" className="form-label p-2">workspace name</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.name} name='name' id='name' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace name' />
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="country" key="defaultCountry" className="form-label p-2">Country</label>
                        <select id="country" onChange={formik.handleChange} value={formik.values.country} name="country" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                            <option key="defaultCountry" hidden> Choose Your Country </option>
                            {countries?.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col">
                        <label htmlFor="city" key="defaultCity" className="form-label p-2">City</label>
                        <select id="city" onChange={formik.handleChange} value={formik.values.city} name="city" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                            <option key="defaultCity" hidden> Choose Your City </option>
                            {cities?.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>


                <div className='mb-3'>
                    <label htmlFor="address" className="form-label p-2">workspace address</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.address} name='address' id='address' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace address' />
                </div>
                <div className='d-flex justify-content-center'>
                    <input type="submit" value="submit" className='btn fs-4 p-2' style={{ color: "#62939f", backgroundColor: "rgba(98, 147, 159, 0.3)", width: "200px" }} />
                </div>
            </form>
        </div>
    );
}

export default WorkspaceForm;
