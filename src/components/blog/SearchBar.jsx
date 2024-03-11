import React from 'react'

function SearchBar() {
  return (
    <div className='p-2'>
        <form>
            <div className="row">
            <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
            <input type="submit" value="search" className="btn btn-primary col-sm-2" />
            </div>
        </form>
    </div>
  )
}

export default SearchBar