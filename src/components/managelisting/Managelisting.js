import React, { useState, useEffect } from 'react'
import heneceforthApi from '../henceforthApi'
import ReactPaginate from "react-paginate";
import axios from 'axios';



const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

const Managelisting = () => {


    const [data, setdata] = useState([])
    
    // let limit = 10;
    


    
    const showalllisteddata = async () => {

        let res = await heneceforthApi.Auth.listedalltype()
        setdata(res?.data)
       


    }
    useEffect(() => {
        return () => {
            showalllisteddata()

        };
    }, [])

    
    

   

   


    return (
        <div>
            <div className='container p-5'>
                <p className='fs-3 mt-5 '>39 Listing</p>
                <div className='header'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">SR.NO</th>
                                <th scope="col">LISTING</th>
                                <th scope="col">TO DO</th>
                                <th scope="col">TYPE</th>
                                <th scope="col">LOCATION</th>
                                <th scope="col">CREATED ON</th>
                                <th><i class="fa-solid fa-gear"></i></th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{index}.</th>

                                            <td>
                                                <img src={`${imageurl}${item?.attributes?.publicData?.cover_photo?.url}`} className='w-25 gap-5' />
                                                <span className='ms-5'>{item?.attributes?.title}</span>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-primary">{item?.attributes?.state}</button>
                                            </td>
                                            <td>{item?.attributes?.publicData?.type === 1 ? "short tem" : "montly"}</td>
                                            {console.log(data?.attributes?.publicData?.type)}
                                            <td>Mohali</td>
                                            <td>{item?.attributes?.createdAt}</td>
                                            <td role="button"><i class="fa-solid fa-ellipsis" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                                    {item?.attributes?.state === "published" ? <li><a class="dropdown-item" href="#">Deactivate</a></li> : ''}
                                                    <li><a class="dropdown-item" href="#">Preview</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}


                        </tbody>
                    </table>
                    
                </div>


            </div>



        </div>
    )
}

export default Managelisting