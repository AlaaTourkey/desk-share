import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function WorkspaceForm() {

    const token = localStorage.getItem('workspaceToken');
    console.log(token);


    async function addWorkspace(values) {
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';
        try {
            let data = await axios.post(
                'https://desk-share-api.onrender.com/admin/workspaces',
                values,
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }
            );
            console.log("dataaaaaaaaaaa");
            console.log(data);
        } catch (error) {
            console.log(error.response.data.errors );
            console.log("errorrrrrrrrrrr");
        }
    }



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
                        <label htmlFor="country" className="form-label p-2">country</label>
                        <input type="text" id="country" onChange={formik.handleChange} value={formik.values.country} name="country" className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace name'/>
                        {/* <select id="country" onChange={formik.handleChange} value={formik.values.country} name="country" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                            <option value="65ea2167eedefdf87f991d35">Egypt</option>
                        </select> */}
                    </div>
                    <div className="col">
                        <label htmlFor="city" className="form-label p-2">city</label>
                        <input type="text" id="city" onChange={formik.handleChange} value={formik.values.city} name="city" className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace name'/>
                        
                        {/* <select id="city" onChange={formik.handleChange} value={formik.values.city} name="city" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                            <option value="65e9b53b583cfabbd459bfe4">Tanta</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alex">Alex</option>
                        </select> */}
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="address" className="form-label p-2">workspace address</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.address} name='address' id='address' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace address' />
                </div>
                <div className='d-flex justify-content-center'>
                    <input type="submit"  value="submit" className='btn fs-4 p-2' style={{ color: "#62939f", backgroundColor: "rgba(98, 147, 159, 0.3)", width: "200px" }} />
                </div>
            </form>
        </div>
    );
}

export default WorkspaceForm;
