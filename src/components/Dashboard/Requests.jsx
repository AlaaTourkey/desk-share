import React from 'react'

function Requests() {
  return (
    <div>
        <div className='d-flex justify-content-center  gap-2 shadow-sm rounded-4 p-4'>
        <button className='btn btn-primary p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
            <span>All Requests</span>
            </button>
        <button className='btn btn-warning p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3 text-light'>
            <span>Pending Requests</span>
            </button>
        <button className='btn btn-success p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
            <span>Accepted Requests</span>
            </button>
        <button className='btn btn-danger p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3'>
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
                        <button className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
                        </button>
                        <button className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
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
                        <button className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
                        </button>
                        <button className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
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
                        <button className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
                        </button>
                        <button className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
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
                        <button className='btn btn-success p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
                        </button>
                        <button className='btn btn-danger p-4 py-3 fs-6 rounded-3'>
                        Accepted Requests
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Requests