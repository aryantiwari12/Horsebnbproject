import React from 'react'
import { useState } from 'react'

const Location = () => {

  const [show, setshow] = useState(false)


  const showdata=()=>{
    show?setshow(false): setshow(true)
  }


  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
          <span className='fs-3 ms-2'>Location</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form class="d-flex" role="search">

              <button class=" border-0 bg-white text-primary fs-3">Save & Exit</button>
            </form>
          </div>
        </div>
      </nav>
      <div class="container px-4 text-center p-5">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <p className='fs-3 fw-bold text-start'>Where is your place located?</p>
              <p className='text-start'>Please input your exact address. Guests will not be able to see your exact address until they have made a booking.</p>
              <button type="button" class="btn btn-outline-primary float-start p-2 mb-4" onClick={showdata}><i class="fa-solid fa-location-arrow"></i>  Use current Location </button>
              <input type="text" className='form-control mt-2' placeholder='Enter the location' />
              {show===true?
              <div className='mt-2'>
                <p className='text-start'>Country/Region</p>
                <input type="text" className='form-control'/>
                <p className='text-start mt-2'>State</p>
                <input type="text" className='form-control'/>
                <p className='text-start mt-2'>City</p>
                <input type="text" className='form-control'/>
                <p className='text-start'>Zip Code</p>
                <input type="text" className='form-control'/>
              </div>:""}
              <hr />
              <div className=''>
                <i class="fa-solid fa-angle-left float-start" role="button"></i>
                
                  <p className='float-start p-2' role="button">Back</p>
                
              
                  <button className='float-end border-0 bg-primary  p-2 text-white' >Next</button>
                
              </div>
            </div>

          </div>
          <div class="col">
            <div class="p-3 ">
              <img src="https://horsebnb.com:8081/assets/img/create-stalls/horse_image.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location