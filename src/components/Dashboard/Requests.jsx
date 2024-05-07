
import React, { useState } from 'react';
import axios from 'axios';

function Requests() {
    const [requestType, setRequestType] = useState(null);
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);
    const [accepting, setAccepting] = useState(false);
    const [rejecting, setRejecting] = useState(false);
        
    const token = localStorage.getItem('workspaceToken');

    // Headers
    const headers = {
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8',
        'Content-Type': 'application/json',
        'Authorization': token
    };

    async function acceptRequestApi() {
        try {
            let data = await axios.put(`https://desk-share-api.onrender.com/admin/reservations/662e2a895298ed6cf6b98b70/accept`,{}, {headers});
            console.log(data);
            console.log("dataaaaaaaaaaaaaaaaaaa");
            // setAcceptedRequests(acceptedRequests.filter(request => request.id !== requestId));
        } catch (error) {
            console.error("Error accepting request:", error);
            console.log("errorrrrrrrrrrrrrrrrrr");
        }
    }
    
    async function rejectRequestApi(requestId) {
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
        } catch (error) {
            console.error("Error rejecting request:", error);
        }
    }

    const acceptRequest = () => {
        setAccepting(true);
        acceptRequestApi();
    };

    const rejectRequest = () => {
        setRejecting(true);
        rejectRequestApi();
    };
    
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
                        <button onClick={acceptRequest} disabled={accepting} className={`btn btn-success p-4 py-3 fs-6 rounded-3 ${accepting ? 'disabled' : ''}`}>
                {accepting ? 'Accepting...' : 'Accepted Requests'}
            </button>
            <button onClick={rejectRequest} disabled={rejecting} className={`btn btn-danger p-4 py-3 fs-6 rounded-3 ${rejecting ? 'disabled' : ''}`}>
                {rejecting ? 'Rejecting...' : 'Rejected Requests'}
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
                            <button  onClick={acceptRequest}  className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                                Accepted Requests
                            </button>
                            <button onClick={rejectRequest}  className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
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
                            <button  onClick={acceptRequest}  className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                                Accepted Requests
                            </button>
                            <button onClick={rejectRequest}  className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
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
                            <button  onClick={acceptRequest}  className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                                Accepted Requests
                            </button>
                            <button onClick={rejectRequest}  className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
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


// =======================================================================

// import React, { useState } from 'react';
// import axios from 'axios';

// function Requests() {
//     const [requestType, setRequestType] = useState(null);

//     async function acceptRequest(requestId) {
//         const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNlNjA5MThkZDZmOWQzNWIyZmU0MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDIxODUxOH0.k04_A2j4cNYPVaTC_wHBWtu14UG2wAAjaQxZZ4aB5tc'; 
//         const token = localStorage.getItem('workspaceToken');
//         try {
//             let data = await axios.put(
//                 `https://desk-share-api.onrender.com/admin/reservations/${requestId}/accept`,
//                 null,
//                 {
//                     headers: {
//                         'x-api-key': apiKey,
//                         'Content-Type': 'application/json',
//                         'Authorization': token
//                     }
//                 }
//             );
//             console.log("Request accepted successfully:", data);
//         } catch (error) {
//             console.error("Error accepting request:", error);
//         }
//     }
    
//     async function rejectRequest(requestId) {
//         const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNlNjA5MThkZDZmOWQzNWIyZmU0MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDIxODUxOH0.k04_A2j4cNYPVaTC_wHBWtu14UG2wAAjaQxZZ4aB5tc'; 
//         const token = localStorage.getItem('workspaceToken');
//         try {
//             let data = await axios.put(
//                 `https://desk-share-api.onrender.com/admin/requests/${requestId}/reject`,
//                 null,
//                 {
//                     headers: {
//                         'x-api-key': apiKey,
//                         'Content-Type': 'application/json',
//                         'Authorization': token
//                     }
//                 }
//             );
//             console.log("Request rejected successfully:", data);
//         } catch (error) {
//             console.error("Error rejecting request:", error);
//         }
//     }
    
//     function showAcceptedRequests() {
//         setRequestType('accepted');
//     }

//     function showRejectedRequests() {
//         setRequestType('rejected');
//     }

//     return (
//         <div>
//             <div className='d-flex justify-content-center gap-2 shadow-sm rounded-4 p-4'>
//                 <button className='btn btn-primary p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
//                     <span>All Requests</span>
//                 </button>
//                 <button className='btn btn-warning p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3 text-light'>
//                     <span>Pending Requests</span>
//                 </button>
//                 <button onClick={showAcceptedRequests} className='btn btn-success p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
//                     <span>Accepted Requests</span>
//                 </button>
//                 <button onClick={showRejectedRequests} className='btn btn-danger p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
//                     <span>Rejected Requests</span>
//                 </button>
//             </div>
//             <div className='px-4 pt-4 row gap-4'>
//                 {requestType === 'accepted' && (
//                     <>
//                         <AcceptedRequest acceptRequest={acceptRequest} />
//                         <AcceptedRequest acceptRequest={acceptRequest} />
                       
//                     </>
//                 )}
//                 {requestType === 'rejected' && (
//                     <>
//                         <RejectedRequest rejectRequest={rejectRequest} />
//                         <RejectedRequest rejectRequest={rejectRequest} />
                       
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// function AcceptedRequest({ acceptRequest }) {
//     return (
//         <div className='row p-2 py-3 shadow rounded justify-content-between'>
//             <div className="col">
//                 <h3>User Name</h3>
//                 <div>
//                     <div>
//                         <span className='me-2'>Date: XXXXX</span>
//                         <span className='me-2'>Time: XXXXX</span>
//                         <span className='me-2'>Duration: XXXXX</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="col">
//                 <div className="d-flex justify-content-end gap-2">
//                     <button onClick={() => acceptRequest("requestId")} className='btn btn-success p-4 py-3 fs-6 rounded-3'>
//                         Accept Request
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function RejectedRequest({ rejectRequest }) {
//     return (
//         <div className='row p-2 py-3 shadow rounded justify-content-between'>
//             <div className="col">
//                 <h3>User Name</h3>
//                 <div>
//                     <div>
//                         <span className='me-2'>Date: XXXXX</span>
//                         <span className='me-2'>Time: XXXXX</span>
//                         <span className='me-2'>Duration: XXXXX</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="col">
//                 <div className="d-flex justify-content-end gap-2">
//                     <button onClick={() => rejectRequest("requestId")} className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
//                         Reject Request
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Requests;








