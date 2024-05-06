import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AllWorkspaces() {


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
    <>
      <div className='row p-5 my-5 g-3 '>
        {wSpace?.map((product) => (
          <div className="col-6 col-md-3   text-center text-capitalize" key={product._id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={product.cover} alt="workSpace Cover" className="card-img-top rounded-3 w-100"  />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#62939f" }}>{product.name}</h5>
                <h6 className="card-text text-dark-emphasis">City : {product.city.name}</h6>
                <h6 className="card-text text-dark-emphasis">Country : {product.country.name}</h6>
                <Link to={`./${product._id}`} className="btn btn-primary"> Details </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllWorkspaces