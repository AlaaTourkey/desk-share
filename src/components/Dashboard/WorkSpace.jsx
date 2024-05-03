import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faLocationDot } from '@fortawesome/free-solid-svg-icons';
function WorkSpace() {
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
            <div className='row pt-5 px-2'>
                <div className="col col-3">
                    <img className='rounded-3' src="/assets/dashboard/cover.png" alt="" style={{ display: "block", width: "100%" }} />
                </div>
                <div className="col col-3">
                    <img className='rounded-3' src="/assets/dashboard/cover.png" alt="" style={{ display: "block", width: "100%" }} />
                </div>
                <div className="col col-3">
                    <img className='rounded-3' src="/assets/dashboard/cover.png" alt="" style={{ display: "block", width: "100%" }} />
                </div>
                <div className="col col-3">
                    <img className='rounded-3' src="/assets/dashboard/cover.png" alt="" style={{ display: "block", width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default WorkSpace