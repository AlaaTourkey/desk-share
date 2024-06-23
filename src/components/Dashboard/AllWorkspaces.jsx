import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';

function AllWorkspaces() {
  const [wSpace, setWSpace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('workspaceToken');

    async function getWorkspaces() {
      const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';
      try {
        const response = await axios.get(
          'https://desk-share-api.onrender.com/admin/workspaces',
          {
            headers: {
              'x-api-key': apiKey,
              'Authorization': token
            }
          }
        );
        console.log(response.data.workspaces);
        setWSpace(response.data.workspaces);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching workspaces:', error);
        setIsLoading(false);
      }
    }
    useEffect(() => {
    getWorkspaces();
  }, [token]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='row p-5 my-2 g-3'>
          {wSpace.map((workspace) => (
            <div className="col-6 col-md-3 text-center text-capitalize mb-4" key={workspace._id}>
              <div className="card h-100" style={{ width: '16rem' }}>
                <img src={workspace.cover || "/assets/dashboard/cover.png"} alt="Workspace Cover" className="card-img-top rounded-3 w-100 h-100" />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#62939f" }}>{workspace.name}</h5>
                  <h6 className="card-text text-dark-emphasis">City: {workspace.city.name}</h6>
                  <h6 className="card-text text-dark-emphasis">Country: {workspace.country.name}</h6>
                  <Link to={`./${workspace._id}`} className="btn btn-primary"> Details </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AllWorkspaces;
