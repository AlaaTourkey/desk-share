import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ItemDetails() {

  const [details, setDetails] = useState('')

  // to get id
  let { id } = useParams()
  // console.log(id);

  const token = localStorage.getItem('workspaceToken');

  async function getDetails() {

    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiQzJabXkwNktHNUplaU9qSWhQNUZOTkg2OVFoMGR6a0UifQ.pSRkGDcH0wpkGP1GetT02mLStF6KUBIr9Iq4B9cvzR8';
    try {
      let data  = await axios.get(
        `https://desk-share-api.onrender.com/admin/workspaces/${id}`,
        {
          headers: {
            'x-api-key': apiKey,
            'Authorization': token
          }
        }
      );
      setDetails(data?.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDetails()
  }, []);

  return (
    <>
      <div className="container">
        <div className="row my-5 text-center">
          <div className=" col-md-6 ">
            <img className='w-100 ' src={details.cover} alt="work space cover" />
          </div>
          <div className="col-md-6 p-5 text-capitalize bg-body-secondary ">
            <h2>Name : <span style={{ color: "#62939f" }}>{details?.name}</span></h2>
            <hr />
            <h4 className=''>Address : <span style={{ color: "#62939f" }}>{details?.address}</span> </h4>
            <h4 className='my-3'>City :<span style={{ color: "#62939f" }}> {details?.city?.name}</span></h4>
            <h4>country : <span style={{ color: "#62939f" }}>{details?.country?.name}</span></h4>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default ItemDetails