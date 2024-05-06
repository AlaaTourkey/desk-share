import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function WorkSpace() {

    const [details, setDetails] = useState('')

    // to get id
    let { id } = useParams()

    const token = localStorage.getItem('workspaceToken');

    async function getDetails() {

        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';
        try {
            let data = await axios.get(
                `https://desk-share-api.onrender.com/admin/workspaces/${id}`,
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Authorization': token
                    }
                }
            );
            setDetails(data?.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDetails()
    }, []);


    return (
        <div className='p-2'>
            <div>
                <img style={{ display: "block", width: "100%", height: "20rem", objectFit: "cover", objectPosition: "center top" }} src="/assets/dashboard/cover.png" alt="" className='rounded-top rounded-circle' />
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3' style={{ color: "#62939f", backgroundColor: "rgba(98, 147, 159, 0.3)" }}>
                    <FontAwesomeIcon icon={faUpload} size="lg" />
                    <span>Upload Cover</span>
                </button>
            </div>
            <div className='row'>
                <div className="col col-12">
                    <h1>{details?.name}</h1>
                    <div style={{ color: "#62939f" }} className='fs-5 d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                        <span>{details?.address} , {details?.city?.name} , {details?.country?.name}</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5 text-center">
                    <div className=" col-md-3 ">
                        <img className='w-100 ' src={details.cover} alt="work space cover" />
                    </div>
                    <div className=" col-md-3 ">
                        <img className='w-100 ' src={details.cover} alt="work space cover" />
                    </div>
                    <div className=" col-md-3 ">
                        <img className='w-100 ' src={details.cover} alt="work space cover" />
                    </div>
                    <div className=" col-md-3 ">
                        <img className='w-100 ' src={details.cover} alt="work space cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSpace