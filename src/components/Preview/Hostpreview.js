import React, { useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi';

const Hostpreview = () => {

    const match = useMatch("/booking-details/:id")

    const [show,setshow]=useState([])

    const showallData = async () => {
        try {
    
          let Apires = await henceforthApi.Auth.Listid(match?.params.id)
          setshow(Apires.data)
          // setstate(Apires?.data)
          console.log("imgstate", Apires.data)
    
        } catch {
          console.log("error")
        }
      }

      useEffect(() => {
     
             showallData()
      
      }, [])

    return (
        <div>
            <div className='container p-5 '>

                <i class="fa-solid fa-chevron-left fw-bold fs-5 text-dark" role="button"></i>
                <div className='row'>
                    <div className='col-md-8 border-bottom p-2 '>
                        <div className='row'>
                            <div className='col-6 border-bottom'>
                                <h1>{show?.attributes?.publicData?.hosted_by}</h1>
                                <p>Typically responds within an hour</p><br />
                            </div>
                            <div className='col-6 float-end border-bottom'>
                                <img src="https://lh3.googleusercontent.com/a/AItbvmmmjK7CaTu2LAEAnQkYS5zRvkf4U1zVz6VIf2bK=s96-c" className='rounded-circle float-end w-25' />
                            </div>
                        </div>
                        <div className='border-bottom p-2'>
                            <p className=''>hello</p>
                        </div>
                        <h1>Amenities</h1>
                        <div className='d-flex justify-content-between'>
                            <p><img src="https://horsebnb.com:8081/assets/img/horse_one.png" /> Climate Controlled Barn</p>
                            <p><img src="https://horsebnb.com:8081/assets/img/horse_one.png" /> Indoor Arena</p>
                            <p><img src="https://horsebnb.com:8081/assets/img/horse_one.png" /> Outdoor Arena</p>
                        </div>
                        <div className='mt-5'>
                            <h1>Still have questions? Message the host</h1>
                            <textarea cols="100" rows="5" ></textarea>
                        </div>
                        <button className='p-2'>Send Message</button>
                    </div>
                    <div className='col-md-4'>
                        <h1>Hello</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hostpreview