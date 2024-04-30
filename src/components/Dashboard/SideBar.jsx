import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList,faGear } from '@fortawesome/free-solid-svg-icons';
import WorkSpace from './WorkSpace';
import { Link } from 'react-router-dom';
function SideBar() {
  return (
    <div className='col-2 p-2'>
        <div className='bg-light shadow-lg rounded-4 p-2' style={{height:"100%"}}>
        <div className='d-flex justify-content-between mb-4' >
            <img src="/assets/dashboard/deskshare.png" alt="" style={{maxWidth:"100%"}}/>
        </div>
        <div className='d-flex flex-column gap-4'>
            <div className='p-4 py-3 fs-5 d-flex justify-content-start align-items-center gap-2 rounded-3' style={{color:"#62939f", backgroundColor:"rgba(98, 147, 159, 0.3)"}}>
            <FontAwesomeIcon icon={faTableList} size="lg" />
            <Link to='/Workspaces'>Workspaces</Link>
            </div>
            <div className='p-4 py-3 fs-5 d-flex justify-content-start align-items-center gap-2 rounded-3' style={{color:"#62939f", backgroundColor:"rgba(98, 147, 159, 0.3)"}}>
            <FontAwesomeIcon icon={faTableList} size="lg"/>
            <span>Requests</span>
            </div>
            <div className='p-4 py-3 fs-5 d-flex justify-content-start align-items-center gap-2 rounded-3' style={{color:"#62939f", backgroundColor:"rgba(98, 147, 159, 0.3)"}}>
            <FontAwesomeIcon icon={faGear} size="lg"/>
            <span>Reports</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SideBar