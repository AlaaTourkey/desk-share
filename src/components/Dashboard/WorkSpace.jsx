import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import img from '../../home images/workspace2__97rMzjCi.webp';
import Loading from '../Loading/Loading';

function WorkSpace() {

    const [details, setDetails] = useState('');

    // to get id
    let { id } = useParams();
    const [cover, setCover] = useState(null);
    const token = localStorage.getItem('workspaceToken');
    // Headers
    const headers = {
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8',
        'Authorization': token
    };

    async function getDetails() {
        try {
            let { data } = await axios.get(`https://desk-share-api.onrender.com/admin/workspaces/${id}`, { headers });
            setDetails(data);
            setCover(data.cover);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = async (e) => {
        const selectedFile = e.target.files[0];
        // setFileUrl(URL.createObjectURL(selectedFile));
        // setFile(selectedFile);

        const formData = new FormData();
        formData.append('file', selectedFile);
        await axios.post(`https://desk-share-api.onrender.com/admin/workspaces/${id}/cover`, formData, { headers })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data);
                    setCover(res.data.imgUrl);
                    toast.success('Cover image uploaded successfully');
                }
            }).catch(err => {
                console.log(err);
                toast.error('Error uploading the cover image.');
            });
    }

    useEffect(() => {
        getDetails();
    }, []);


    return (
        <>
            {details ? <div className='p-2'>
                <div>
                    <img
                        style={{ display: "block", width: "100%", height: "30rem", objectFit: "cover", objectPosition: "center center"}}
                        src={cover || "/assets/dashboard/cover.png"}
                        alt="Workspace cover"
                        className='rounded-5'
                    />
                </div>
                <div className='d-flex justify-content-between my-3'>
                <div>
                        <h1>{details?.name}</h1>
                        <div style={{ color: "#62939f" }} className='fs-5 d-flex gap-2 align-items-center'>
                            <FontAwesomeIcon icon={faLocationDot} size="lg" />
                            <span>{details?.address}, {details?.city?.name}, {details?.country?.name}</span>
                        </div>
                    </div>
                    <label
                        className='btn p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'
                        style={{ color: "#62939f", backgroundColor: "rgba(98, 147, 159, 0.3)",height:"fit-content" }}>
                        <FontAwesomeIcon icon={faUpload} size="lg" />
                        <span>Choose Cover</span>
                        <input type="file" onChange={handleChange} style={{ display: 'none' }} />
                    </label>
                </div>
                {/* <div className='row'>
                    <div className="col col-12">
                        <h1>{details?.name}</h1>
                        <div style={{ color: "#62939f" }} className='fs-5 d-flex gap-2 align-items-center'>
                            <FontAwesomeIcon icon={faLocationDot} size="lg" />
                            <span>{details?.address}, {details?.city?.name}, {details?.country?.name}</span>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row my-5 text-center">
                        <div className="col-md-3">
                            <img className='w-100 rounded-5' src={img} alt="Workspace" />
                        </div>
                        <div className="col-md-3">
                            <img className='w-100 rounded-5' src={img} alt="Workspace" />
                        </div>
                        <div className="col-md-3">
                            <img className='w-100 rounded-5' src={img} alt="Workspace" />
                        </div>
                        <div className="col-md-3">
                            <img className='w-100 rounded-5' src={img} alt="Workspace" />
                        </div>
                    </div>
                </div>
            </div> : <Loading />}
        </>
    );
}

export default WorkSpace;
