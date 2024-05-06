
import React, { useState } from 'react';
import axios from 'axios';


function Requests() {

    const [requestType, setRequestType] = useState(null);
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);
    const [buttonStatus, setButtonStatus] = useState('disabled');

    const token = localStorage.getItem('workspaceToken');


    // Headers
    const headers = {
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8',
        'Content-Type': 'application/json',
        'Authorization': token
    };


    async function acceptRequest() {
        try {
            let data = await axios.put(`https://desk-share-api.onrender.com/admin/requests/${requestId}/accept`, {}, { headers });
            console.log(data);
            setButtonStatus('pending');
            console.log("dataaaaaaaaaaaaaaaaaaa");
            // setAcceptedRequests(acceptedRequests.filter(request => request.id !== requestId));
        } catch (error) {
            console.error("Error accepting request:", error);
            console.log("errorrrrrrrrrrrrrrrrrr");
        }

    }


    async function rejectRequest(requestId) {
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';
        const token = localStorage.getItem('workspaceToken');
        try {
            let data = await axios.put(
                `https://desk-share-api.onrender.com/admin/requests/${requestId}/reject`,
                null,
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }
            );
            console.log("Request rejected successfully:", data);
            setRejectedRequests(rejectedRequests.filter(request => request.id !== requestId));
            setButtonStatus('pending');

        } catch (error) {
            console.error("Error rejecting request:", error);

        }

    }

    function showAcceptedRequests() {
        setRequestType('accepted');
    }
    function showRejectedRequests() {
        setRequestType('rejected');
    }

    return (
        <div>
            <div className='d-flex justify-content-center  gap-2 shadow-sm rounded-4 p-4'>
                <button className='btn btn-primary p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
                    <span>All Requests</span>
                </button>
                <button className='btn btn-warning p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3 text-light'>
                    <span>Pending Requests</span>
                </button>
                <button onClick={showAcceptedRequests} className='btn btn-success p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
                    <span>Accepted Requests</span>
                </button>
                <button onClick={showRejectedRequests} className='btn btn-danger p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
                    <span>Rejected Requests</span>
                </button>
            </div>
            <div className='px-4 pt-4 row gap-4'>
                <div className='row p-2 py-3 shadow rounded justify-content-between'>
                    <div className="col">
                        <h3>User Name</h3>
                        <div>
                            <div>
                                <span className='me-2'>Date: XXXXX</span>
                                <span className='me-2'>Time: XXXXX</span>
                                <span className='me-2'>Duration: XXXXX</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end gap-2">
                            <button
                                onClick={acceptRequest}
                                className='btn btn-success p-4 py-3 fs-6 rounded-3'
                                disabled={buttonStatus === 'pending'}
                            >
                                Accepted Requests
                            </button>
                            <button
                                onClick={rejectRequest}
                                className='btn btn-danger p-4 py-3 fs-6 rounded-3'
                                disabled={buttonStatus === 'pending'}
                            >
                                Rejected Requests
                            </button>

                        </div>
                    </div>
                </div>
                <div className='row p-2 py-3 shadow rounded justify-content-between'>
                    <div className="col">
                        <h3>User Name</h3>
                        <div>
                            <div>
                                <span className='me-2'>Date: XXXXX</span>
                                <span className='me-2'>Time: XXXXX</span>
                                <span className='me-2'>Duration: XXXXX</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end gap-2">
                            <button onClick={acceptRequest} className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                                Accepted Requests
                            </button>
                            <button onClick={rejectRequest} className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                                Rejected Requests
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row p-2 py-3 shadow rounded justify-content-between'>
                    <div className="col">
                        <h3>User Name</h3>
                        <div>
                            <div>
                                <span className='me-2'>Date: XXXXX</span>
                                <span className='me-2'>Time: XXXXX</span>
                                <span className='me-2'>Duration: XXXXX</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end gap-2">
                            <button onClick={acceptRequest} className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                                Accepted Requests
                            </button>
                            <button onClick={rejectRequest} className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                                Rejected Requests
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row p-2 py-3 shadow rounded justify-content-between'>
                    <div className="col">
                        <h3>User Name</h3>
                        <div>
                            <div>
                                <span className='me-2'>Date: XXXXX</span>
                                <span className='me-2'>Time: XXXXX</span>
                                <span className='me-2'>Duration: XXXXX</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end gap-2">
                            <button onClick={acceptRequest} className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                                Accepted Requests
                            </button>
                            <button onClick={rejectRequest} className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                                Rejected Requests
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Requests;



