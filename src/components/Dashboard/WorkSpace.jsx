import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
function WorkSpace() {

    const [wSpace, setWSpace] = useState([])

    const token = localStorage.getItem('workspaceToken');

    async function getWorkspaces() {
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';
        try {
            let { data } = await axios.get(
                'https://desk-share-api.onrender.com/admin/workspaces',
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Authorization': token
                    }
                }
            );
            console.log(data.workspaces);
            setWSpace(data.workspaces)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWorkspaces()

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
                    <h1>D Co-Working Space</h1>
                    <div style={{ color: "#62939f" }} className='fs-5 d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                        <span>Kota Kinabalu, Sabah</span>
                    </div>
                </div>
            </div>
            <div className='row p-5 my-5 g-3 '>
                {wSpace?.map((product) => (
                    <div className="col-6 col-md-3   text-center text-capitalize" key={product._id}>
                        <div className="bg-body-secondary p-2">
                            <Link className='nav-link' to={`../itemdetails/${product._id}`}>
                                <img className='rounded-3 w-100' src={product.cover} alt="workSpace Cover" />
                                <h3 className='h5' style={{ color: "#62939f" }} >{product.name}</h3>
                                <h6 className='text-dark-emphasis ' >{product.city.name}</h6>
                                <h6 className='fs-6 text-secondary'>{product.country.name}</h6>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkSpace