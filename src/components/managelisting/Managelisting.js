import React, { useState, useEffect } from 'react'
import heneceforthApi from '../henceforthApi'
import ReactPaginate from "react-paginate";
import axios from 'axios';
import moment from 'moment';
import { Link, useMatch } from 'react-router-dom';
import "../managelisting/manage.css"



const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

// const match=useMatch("/manage-listing:id")

const Managelisting = () => {
    const match = useMatch('/manage-listing')


    const [data, setdata] = useState([])
    const [countdata,setcountdata]=useState('')
    
    // let limit = 10;
    


    
    const showalllisteddata = async () => {

        let res = await heneceforthApi.Auth.listedalltype()
        setdata(res?.data)
        setcountdata(res?.count)
        console.log(res?.count)


    }
    useEffect(() => {
        return () => {
            showalllisteddata()

        };
    }, [])

    
    

   

   


    return (
        <div>
            <div className='container p-5'>
                <p className='fs-3 mt-5 '>{countdata} Listing</p>
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
                                                <Link to={`/manage-listing/publish-listing/${item.id.uuid}`}>
                                                <button type="button" class="btn btn-primary-outline px-3">{item?.attributes?.state}</button>
                                                </Link>
                                            </td>
                                            {/* <td>{item?.attributes?.publicData?.type === 1 ? "short tem" : "montly"}</td> */}
                                            <td>{item?.attributes?.publicData?.type === 1 ? "short tem" : item?.attributes?.publicData?.type === 2 ?"Montly":item?.attributes?.publicData?.type === 3?"Adventure":"Guest Accommodations" }</td>
                                            {console.log(data?.attributes?.publicData?.type)}
                                            <td>C-196a, Times Square, 3rd Floor, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071, India</td>
                                            <td>{moment(item?.attributes?.createdAt).format("MMM Do YY")}{}</td>
                                            <td role="button"><i class="fa-solid fa-ellipsis" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                <ul class="dropdown-menu">
                                                    <Link to={item?.attributes?.publicData?.type === 1?`/create-stall/step1${item.id.uuid}`:""}>
                                                    <li><a class="dropdown-item" href="#">Edit</a></li></Link>
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