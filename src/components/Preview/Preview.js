import React, { useEffect, useRef, useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import Calendar from 'react-calendar';
import "../Preview/preview.css"
import henceforthApi from '../henceforthApi';
import { arrayIncludes } from '@mui/x-date-pickers/internals/utils/utils';
import { set } from 'rsuite/esm/utils/dateUtils';
import Modal from '../Modal/Modal';
import moment from 'moment';
import Horse from "../../IMG/horse_image.png"



export const Preview = () => {

  const ref = useRef()

  const imageurl = "https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/";

  const match = useMatch('/booking-details/:id/:host_id')

  const [counter, setCounter] = useState(0)
  const [countstore, setcountstore] = useState("")

  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  const [show, setshow] = useState(false)

  const [hostdata, sethostdata] = useState([])
  const [newhost, setnewhost] = useState([])
  const [showdata, setshowdata] = useState([])
  // const [state, setstate] = useState([])

  const listeddata = async (id) => {

    try {
      let Apires = await henceforthApi.Auth.hostlisting(match.params.host_id)
      sethostdata(Apires.data)
      console.log("Hostdata", Apires)

    } catch {
      console.log("error on preview page")
    }
  }
  const Showingdata = async () => {
    try {
      let Apires = await henceforthApi.Host.hostlisted(match.params.host_id)
      sethostdata(Apires.data)

      console.log(Apires)
    } catch {
      console.log("error")
    }
  }

    const showallData = async () => {
    try {

      let Apires = await henceforthApi.Auth.Listid(match.params.id)
      setshowdata(Apires.data)
      // setstate(Apires?.data)
      console.log("imgstate", Apires.data)

    } catch {
      console.log("error")
    }
  }

  useEffect(() => {

    listeddata()
    showallData()

  }, [])

  




  return (
    <div>
      <div className='container mt-5 '>
        <div className='d-flex flex-column'>
          <h1>{showdata?.attributes?.title}</h1>

          <div className='d-flex justify-content-between '>
            <div className='d-flex'>
              <span>
                <img src="https://horsebnb.com:8081/assets/img/star-red.svg" />
              </span>
              <span className='text-muted ms-2'>{showdata?.attributes?.reviews}({showdata?.attributes?.reviews} Review)</span>
              <span className='ms-2'>Sahibzada Ajit Singh Nagar, Punjab</span>
            </div>
            <div className=''>
              <span >
                <i class="fa-solid fa-share-nodes fs-6" role="button"></i>
              </span>
              <span className='ms-2 fs-6'>Share</span>
            </div>
          </div>
        </div>
        <div className='row  border'>
          <div className='col-md-6 w-50'>
            <img src={`${imageurl}${showdata?.attributes?.publicData?.cover_photo?.url}`} className="w-75 h-150 p-2" />
          </div>
          <div className='col-md-6 px-md-0 p-0 d-flex flex-wrap'>
            {showdata?.attributes?.publicData?.images.map((res) => {
              { console.log(res) }
              return (
                <>
                  <div className='col-6 border-start border-middle border-end '>

                    <img src={`${imageurl}${res?.url}`} id="zoom" className="h-50 w-100" />
                  </div>

                </>
              )
            })}


            
          </div>
        </div>
        <div className='row mt-5 p-2'>
          <div className='col-md-9 '>
            <div className='d-flex justify-content-between border-bottom pb-3 align-items-center'>
              <p>{showdata?.attributes?.title} Hosted by {showdata?.attributes?.publicData?.hosted_by} </p>
              <img src={`${imageurl}${showdata?.attributes?.publicData?.host_image}`} className='rounded-circle text-end' style={{ width: "50px" }} />

            </div>
            <div className='mt-2 border-bottom'>
              <i class="fa-regular fa-calendar-days fs-4"></i>
              <span className='fs-4 mt-5 ms-2'>Short Term Stalls</span>
            </div>
            <div className='mt-2 border-bottom'>
              <img src="https://horsebnb.com:8081/assets/img/spray.png" />
              <span className='fs-4 mt-5 ms-2'>Friendly and responsive host</span>
            </div>
            <div className='mt-2 border-bottom'>
              <i class="fa-solid fa-house fs-4"></i>
              <span className='fs-4 mt-5 ms-2'>Great check-in experience</span>
            </div>
            <div className='mt-2 border-bottom'>
              <img src="https://horsebnb.com:8081/assets/img/guest.png" />
              <span className='fs-4 mt-5 ms-2'>Offers Guest Accommodations</span>
            </div>
            <div className='mt-2 border-bottom'>
              <img src="https://horsebnb.com:8081/assets/img/tag.png" />
              <span className='fs-4 mt-5 ms-2'>Cancellation policy</span>
            </div>
            <div className='mt-2 border-bottom p-2'>
              <span className='fs-4 mt-5 ms-2 fw-bold'>Description</span><br />
              <span className='ms-2 fs-4'>{showdata?.attributes?.description}</span>
            </div>
            <span className='fs-4 mt-5 d-flex ms-2 fw-bold'>Select check-in date</span><br /><br />
            <div className='mt-2 d-flex border-bottom p-2'>
              <Calendar onChange={onChange} value={value} />
              <Calendar onChange={onChange1} value={value1} />
            </div>
          </div>
          <div className='col-md-3 shadow h-50'>
            {showdata?.attributes?.publicData?.type == 1 || showdata?.attributes?.publicData?.type == 3 || showdata?.attributes?.publicData?.type == 4 ?
              <div className='d-flex'>
                <div className='col-md-6 border-top border-start border-end p-2'>
                  <label>CHECK-IN</label>
                  <input type="date" />
                </div>
                <div className='col-md-6 p-2 border-top border-end'>
                  <label>CHECK-OUT</label>
                  <input type="date" />
                </div>
              </div> :
              <div className='p-4 border-start border-top border-end text-center'>
                <label className='text-center'>Add Month</label>
              </div>
            }
            <div className='col-md-12 border-top border-start border-bottom border-end text-center' >
              {showdata?.attributes?.publicData?.type == 1 || showdata?.attributes?.publicData?.type == 2
                || showdata?.attributes?.publicData?.type == 4 ?
                <p className='' role="button" data-bs-toggle="modal" data-bs-target="#staticBackdropP">
                  ADD STALLS
                </p> : <p className='' role="button" data-bs-toggle="modal" data-bs-target="#staticBackdropP">{countstore}Stalls</p>}
            </div>

            {showdata?.attributes?.publicData?.type == 1 || showdata?.attributes?.publicData?.type == 2 || showdata?.attributes?.publicData?.type == 4 ?
              <div className=''>

                <table className='mb-0 '>
                  <tbody>
                    <tr className=''>
                      <td className=' w-100'>Price of Night</td>
                      <td className='text-end position-absloute  w-100 p-2'>${showdata?.attributes?.publicData?.listing_price}</td>

                    </tr>
                    {showdata?.attributes?.publicData?.type == 1 || showdata?.attributes?.publicData?.type == 4 ?
                      <tr>
                        <td>Nights</td>
                        <td className='text-end position-absloute  w-100 p-2'>x0</td>

                      </tr> : ""}
                    <tr className='border-bottom mt-2'>
                      <td>Stalls</td>
                      <td className='text-end position-absloute  w-100 p-2'>x{countstore}</td>
                    </tr>
                    <tr className='mt-2'>
                      <td>Sub-total</td>
                      <td className='text-end position-absloute  w-100 p-2'>x0</td>
                    </tr>
                    <tr className='border-bottom mt-2'>
                      <td>Service fee</td>
                      <td className='text-end position-absloute  w-100'>$0.00</td>
                    </tr>
                    <tr className='border-bottom mt-2 p-5'>
                      <td className='fw-bold text-dark'>Total (USD)</td>
                      <td className='text-end position-absloute  w-100 p-2'> $0.00</td>

                    </tr>

                  </tbody>
                </table>
              </div> : ""}
            <div className='p-2 w-100'>
              <button className='w-100 p-2 text-white border-0' style={{ backgroundColor: "#00a4b4" }}>
                {showdata?.attributes?.publicData?.type == 1 || showdata?.attributes?.publicData?.type == 2 || showdata?.attributes?.publicData?.type == 4 ? <span>Reserve</span> : <span>Check availability slots</span>}</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='mt-2 border-bottom p-2'>
            <span className='fs-4 d-flex justify-content-between mt-5 ms-2 fw-bold'>Amenities</span><br />
            <img src="https://horsebnb.com:8081/assets/img/horse_one.png" className='fs-4' />
            <span className='ms-2  fs-4'>Climate Controlled Barn</span>
            <img src="https://horsebnb.com:8081/assets/img/horse_one.png" className='fs-4 ms-5 position-absloute' />
            <span className='ms-5  fs-4'>Indoor Arena</span>
          </div>
          <div className='mt-2 border-bottom p-2'>

            <span className='fs-4  fw-bold'><i class="fa-solid fa-star" style={{ color: "#00a4b4" }}></i>0 (0 Reviews)</span><br />
            <h1 className='text-center mt-5 text-muted mx-auto'>No Reviews Yet!</h1>
            <p className='fs-4 fw-bold'>Where you’ll be</p>
            <p className='text-muted'>Sahibzada Ajit Singh Nagar, Punjab, India</p>
            <iframe width="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Time%20square%20mohali%20punjub,%20India%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123 movies</a>
          </div>
          <div className='col-6 p-2 d-flex border-bottom flex-warp border-end'>
            <img src={`${imageurl}${showdata?.attributes?.publicData?.host_image}`} className='rounded-circle mt-2' style={{ width: "60px", height: "70px" }} />
            <h1 className='mt-2 ms-2'>Hosted By {showdata?.attributes?.publicData?.hosted_by}</h1><br />
            <h6 className='text-muted ms-5 position-absloute'>Joined on {moment(showdata?.attributes?.publicData?.joined_in).format("MMM DD YYYY")}</h6>
          </div>
          {/* {moment(Number(created_at)).format("MMM DD, YYYY")} */}
          <div className='col-6 p-5 d-flex border-bottom  '>
            <img src="https://horsebnb.com:8081/assets/img/security.svg" className='position-absloute' style={{ width: "30px" }} />
            <p className='mt-2'>To protect your payment, never transfer money or communicate outside of the HorseBnB website or app.</p><br />
            <Link to={`/booking-details/${match.params.id}`}>
            <button className='position-absolute mt-5  float-start '>Contact host</button>
            </Link>
          </div>
          <div className='mt-2 border-bottom p-2'>

            <div className='d-flex justify-content-between'>
              <span className='fs-4 text-start fw-bold'>henceforth mohali's Listings</span><br />
              <button className='text-white border-0' style={{ backgroundColor: "#00a4b4" }} onClick={Showingdata} >View All</button>
            </div>
            <div className='row mt-2'>
              {hostdata.map((res) => {
                return (
                  <>
                    <div className='col-lg-4 w-25 h-25 p-2'>
                      <img src={`${imageurl}${res.cover_photo}`} className='w-100 h-50' />
                      <p>{`${showdata?.attributes?.publicData?.type == 1 ? "Short Term" : showdata?.attributes?.publicData?.type == 2 ? "Montly Term" : showdata?.attributes?.publicData?.type == 3 ? "Horse Adventure" : "Guest Accomodation"}`}</p>
                      <p>{res.title}<span className='float-end '>{res.rating}</span></p>

                    </div>
                  </>
                )
              })}

            </div>
          </div>
        </div>
      </div>
      {/* <Modal.Perviewstall/> */}
      <Modal.Perviewstall counter={counter} setCounter={setCounter} countstore={countstore} setcountstore={setcountstore} />
    </div>
  )
}


