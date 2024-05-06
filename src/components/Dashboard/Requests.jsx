
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';

function Requests() {
        const baseUrl="https://desk-share-api.onrender.com";
        const [reservations, setReservations] = useState([]);
        const [workspaces,setWorkspaces]=useState([]);
        const [currentWorkspace,setcurrentWorkspace]=useState(null);
        const token = localStorage.getItem('workspaceToken');
        let [searchParams, setSearchParams] = useSearchParams();
    // Headers
    const headers = {
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8',
        'Content-Type': 'application/json',
        'Authorization': token
    };
    useEffect(()=>{
        const config={
            method:"get",
            baseURL:baseUrl,
            url:"/admin/workspaces",
            headers,
        };
        axios.request(config).then(res=>{
            if(res.status===200){
                console.log(res.data.workspaces);
                setWorkspaces(res.data.workspaces);
            }
        }).catch(err=>console.log(err));
    },[]);
    useEffect(()=>{
                const status=searchParams.get("status");
                const config={
                method:"get",
                baseURL:baseUrl,
                url:`/admin/workspaces/${currentWorkspace}/reservations?status=${status && status!=="all" ? status : ""}`,
                headers,
            }
            axios.request(config).then(res=>{
                if(res.status===200){
                    console.log(res.data.reservations);
                    setReservations(res.data.reservations.reverse());
                }
            }).catch(err=>console.log(err))
    },[currentWorkspace,searchParams]);

    const acceptRequest=(id)=>{
        console.log(id);
        const config={
            method:"put",
            baseURL:baseUrl,
            url:`/admin/reservations/${id}/accept`,
            headers
        };
        axios.request(config)
        .then(res=>{
            if(res.status===204){
                console.log("accepted")
                setReservations(
                    reservations.map(e=>{
                        if(e._id===id){
                            return {...e,status:"accepted"}
                        }
                        return e
                    })
                );
            }
        })
        .catch(err=>console.log(err));
    };
    const rejectRequest=(id)=>{
        console.log(id);
        const config={
            method:"put",
            baseURL:baseUrl,
            url:`/admin/reservations/${id}/reject`,
            headers
        };
        axios.request(config)
        .then(res=>{
            if(res.status===204){
                console.log("rejected")
                setReservations(
                    reservations.map(e=>{
                        if(e._id===id){
                            return {...e,status:"rejected"}
                        }
                        return e
                    })
                );
            }
        })
        .catch(err=>console.log(err));
    };

    return (
        <div>
            <div className='p-2'>
            <select  class="form-select p-2"  name='workspace' id='workspace' onChange={e=>{
                setcurrentWorkspace(e.target.value);
            }}>
            <option disabled selected>Select your workspace</option>
                {
                    workspaces?.map(e=><option value={e?._id}>{e?.name}</option>)
                }
            </select>
            </div>
            <div className='d-flex justify-content-center  gap-2 shadow-sm rounded-4 p-4'>
                <button 
                onClick={e=>{
                    setSearchParams({status:"all"});
                }}
                className='btn btn-primary p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
                    <span>All Requests</span>
                </button>
                <button
                onClick={e=>{
                    setSearchParams({status:"pending"});
                }}
                className='btn btn-warning p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3 text-light'>
                    <span>Pending Requests</span>
                </button>
                <button 
                onClick={e=>{
                    setSearchParams({status:"accepted"});
                }}
                className='btn btn-success p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
                    <span>Accepted Requests</span>
                </button>
                <button 
                onClick={e=>{
                    setSearchParams({status:"rejected"});
                }}
                className='btn btn-danger p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
                    <span>Rejected Requests</span>
                </button>
            </div>
            {
                reservations.map(e=>{
                    const date=new Date(e?.date);
                    const id=e?._id;
                    return(
                        <div className='px-4 pt-4 row gap-4' key={id}>
                        <div className='row p-2 py-3 shadow rounded justify-content-between'>
                            <div className="col">
                                <h3>{e?.user.name}</h3>
                                <div>
                                    <div>
                                        <span className='me-2'>Date: {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</span>
                                        <span className='me-2'>Time: {`${date.getUTCHours()}:${date.getMinutes()}`}</span>
                                        <span className='me-2'>Duration: 2</span>
                                        <span className='me-2'>Status: <span className={`${e?.status==='accepted' ? "text-success" : e?.status==='rejected' ? "text-danger" : "text-warning"}`}>{e?.status}</span></span>
                                    </div>
                                </div>
                            </div>
                            {
                                e?.status==='pending' ? 
                                <div className="col">
                                <div className="d-flex justify-content-end gap-2">
                                    <button
                                    onClick={(e)=>acceptRequest(id)}
                                    className='btn btn-success  p-4 py-3 fs-6 rounded-3'>
                                        Accept
                                    </button>
                                    <button  
                                    onClick={(e)=>rejectRequest(id)}
                                    className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                                    Reject
                                    </button>
                                </div>
                            </div>:
                            null
                            }
                        </div>
        
                    </div>
                    )
                })
            }
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

