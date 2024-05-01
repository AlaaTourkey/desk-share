import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';

function WorkspaceForm() {

    const token = localStorage.getItem('token');
    console.log(token);
 

    async function addWorkspace(values) {
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmJjNjNlY2MwYzQ2N2EzNDJjNTg3NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDE0NDgzMX0.KGNAxpAeEPq1a6mlBMTSpCw5NRJXpYXv9DUiRnwnxS4';
        try {
            let data = await axios.post(
                'https://desk-share-api.onrender.com/admin/workspaces',
                values,
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
    
            console.log(data);
        } catch (error) {
            console.log(error);
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
            <form className='p-5 fs-6' >
                <div className='mb-2'>
                    <label htmlFor="name" className="form-label p-2">workspace name</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.name} name='name' id='name' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace name' />
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="country" className="form-label p-2">country</label>
                        <select id="country" onChange={formik.handleChange} value={formik.values.country} name="country" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                            <option value="Egypt">Egypt</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="city" className="form-label p-2">city</label>
                        <select id="city" onChange={formik.handleChange} value={formik.values.city} name="city" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                            <option value="Tanta">Tanta</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alex">Alex</option>
                        </select>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="address" className="form-label p-2">workspace address</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.address} name='address' id='address' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace address' />
                </div>
                <div className='d-flex justify-content-center'>
                    <input type="submit"  onSubmit={formik.handleSubmit} value="submit" className='btn fs-4 p-2' style={{ color: "#62939f", backgroundColor: "rgba(98, 147, 159, 0.3)", width: "200px" }} />
                </div>
            </form>
        </div>
    );
}

export default WorkspaceForm;
