import React from 'react'
import SideBar from './SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import WorkSpace from './WorkSpace';
import Requests from './Requests';
import WorkspaceForm from './WorkspaceForm';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function DashBoardPage() {
  



  return (
    <div className='container-fluid' style={{minHeight:"100vh"}}>
      <div className="row" style={{height:"100vh"}}>
      <SideBar/>
      <div className='col-10'>
        <div className='d-flex justify-content-between align-items-center p-2'>
          <h2>Workspaces</h2>
          <div className='d-flex gap-2'>
          <button className='btn p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3' style={{color:"#62939f", backgroundColor:"rgba(98, 147, 159, 0.3)"}}>
            <FontAwesomeIcon icon={faPenToSquare} />
            <Link className='text-decoration-none' to='/DashBoardPage/workspaces' style={{color:"#62939f"}}>edit Workspaces</Link>
            </button>
          <button className='btn p-4 py-3 fs-6 d-flex justify-content-start align-items-center gap-2 rounded-3' style={{color:"#62939f", backgroundColor:"rgba(98, 147, 159, 0.3)"}}>
            <FontAwesomeIcon icon={faPlus} />
            <Link className='text-decoration-none'  to='/DashBoardPage/addworkspace' style={{color:"#62939f"}}>add Workspace</Link>
            </button>
          </div>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DashBoardPage