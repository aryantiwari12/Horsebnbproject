import React from 'react'
import { useState, useEffect } from 'react'
import heneceforthApi from '../henceforthApi'

const imageurl="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/";

const Shorttermsstalls = () => {

  const [loading, setLoading] = useState(false);
  const [ownlisting, setownlisting] = useState([])




  const showalllsiting = async () => {
    let res = await heneceforthApi.Auth.getalllisting()
      .then((res) => {

        setownlisting(res.data)
        console.log(res.data)
      })


  }

  useEffect(() => {
    return () => {
      showalllsiting()
    };
  }, [])






  return (
    <div>
      <div className='container mt-5 text-start'>
        <h4 className='fs-2'>Short Term Stalls</h4>
        <p className='fs-5'>Traveling with your horse? Find overnight accommodations for your horse</p>
        <div className='row'>
          {ownlisting.map(user => {
            return (
              <>
                  {/* <div className='row'> */}
                  <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                    <div className='w-100 h-50'>
                      <img src={`${imageurl}${user.attributes?.publicData?.cover_photo?.url}`}className='rounded w-100 h-100'></img>
                      <div className=' justify-content-between'>
                        <span className='text-black font-small fw-600' role="button">{user?.attributes?.title}</span><br />
                        <p className='mt-2' role="button">{user?.attributes?.description.length >0? `${user?.attributes?.description.slice(0,100)}`:''}</p>
                        <p className='nightt'>${user?.attributes?.price?.amount}/Night</p>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
              </>
            )
          })}
        </div>

          <h4 className='fs-4 text-success' role="button">Show all Short Term Stalls <i class="fa-solid fa-angle-right"></i></h4>
        </div>
      </div>
      )
}

      export default Shorttermsstalls