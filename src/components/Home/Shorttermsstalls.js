import React from 'react'

const shorttermsstalls = () => {
  return (
    <div>
      <div className='container mt-5 text-start'>
        <h4 className='fs-2'>Short Term Stalls</h4>
        <p className='fs-5'>Traveling with your horse? Find overnight accommodations for your horse</p>
        <div className='row'>
          <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
            <div className=''>
              <img src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Medium/1659220798689-file.jpeg" className='rounded w-100'></img>
              <div className=' justify-content-between'>
                <span className='text-black font-small fw-600' role="button">Gällbo Hästgård</span><br/>
                <p className='mt-2' role="button">Vattenhink, Spån, hö och</p>
                <p className='nightt'>$25/Night</p>
              </div>
            </div>
          </div>
        </div>
        <h4 className='fs-4 text-success' role="button">Show all Short Term Stalls <i class="fa-solid fa-angle-right"></i></h4>
      </div>
    </div>
  )
}

export default shorttermsstalls