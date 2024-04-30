import React from 'react'

function WorkspaceForm() {
  return (
    <div className='p-4'>
        <h1>Register your Workspace</h1>
        <form className='p-5 fs-6'>
            <div className='mb-2'>
                <label htmlFor="name" className="form-label p-2">workspace name</label>
                <input type="text" name='name' id='name' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace name' />
            </div>
            <div className="row mb-2">
                <div className="col">
                    <label htmlFor="country" className="form-label p-2">country</label>
                    <select id="country" name="country" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                        <option value="Egypt" selected>Egypt</option>
                    </select>
                </div>
                <div className="col">
                <label htmlFor="city" className="form-label p-2">city</label>
                    <select id="city" name="city" className="form-select p-2 py-3 fs-6 border-2 border-info-subtle">
                        <option value="Tanta" selected>Tanta</option>
                        <option value="Cairo" selected>Cairo</option>
                        <option value="Alex" selected>Alex</option>
                    </select>
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor="address" className="form-label p-2">workspace address</label>
                <input type="text" name='address' id='address' className="form-control p-2 py-4 fs-6 border-2 border-info-subtle" placeholder='workspace address' />
            </div>
            <div className='d-flex justify-content-center'>
            <input type="submit" value="submit" className='btn fs-4 p-2' 
            style={{color:"#62939f", backgroundColor:"rgba(98, 147, 159, 0.3)", width:"200px"}}/>
            </div>
        </form>
    </div>
  )
}

export default WorkspaceForm