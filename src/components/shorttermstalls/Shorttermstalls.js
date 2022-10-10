import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useMatch, useParams, useNavigate, Link } from 'react-router-dom';
import henceforthApi from '../henceforthApi';
import "../shorttermstalls/short.css";


const imageurl = "https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/";

const Shorttermstalls = () => {
  let location = useLocation()

  var query = new URLSearchParams(location.search);

  const match = useMatch('/Search/:type')
  const match1 = useMatch('/Search/:type')
  let navigate = useNavigate()

  const [shortterm, setshortterm] = useState([])

  const [typedata, settypedata] = useState([])

  const shortalllisting = async () => {
    try {
      let Apires = await henceforthApi.Auth.getalllisting()
      setshortterm(Apires?.data)
      console.log("res", Apires)
      settypedata(Apires.data[0].attributes.publicData.type)
      console.log(typedata)
    } catch {
      console.error("error");
    }
  }

  const guestalllisting = async () => {
    try {

      let Apires = await henceforthApi.Auth.montnlygetalllisting()
      settypedata(Apires.data[0].attributes.publicData.type)
      setshortterm(Apires.data)


    } catch {
      console.log("error")
    }
  }
  const Equestrainlllisting = async () => {
    try {

      let Apires = await henceforthApi.Auth.Equestrian()
      settypedata(Apires.data[0].attributes.publicData.type)
      setshortterm(Apires?.data)
      console.log("eques", Apires)


    } catch {
      console.log("error")
    }
  }
  const guestlllisting = async () => {
    try {
      var query = new URLSearchParams(location.search);
      let q = query.toString()
      let Apires = await henceforthApi.Auth.Guestgetalllisting(q)

      setshortterm(Apires?.data)
      settypedata(Apires?.data[0]?.attributes?.publicData?.type)
      console.log("eques", Apires)
      console.log(typedata)


    } catch {
      console.log("error")
    }
  }
  const filters = [
    { name: "Short term ", value: "1" },
    { name: "Monthly Board", value: "2" },
    { name: "Guest Accommodations", value: "3" },
    { name: "Horse Accommodations", value: "4" }
  ]
  const onFilterApply = (name, value) => {
    if (query.has(name)) {
      let queryValue = query.get(name)

      if (value === "") {
        query.delete(name)
      } else {
        query.set(name, value)
      }
    } else {
      query.set(name, value)
    }
    navigate({ search: query.toString() }, { replace: true })
  }



  useEffect(() => {


    // if (match.params.type == "1") {
    //   shortalllisting()
    // } else if (match.params.type == "2") {
    //   guestalllisting()
    // } else if (match.params.type == "3") {
    //   Equestrainlllisting()
    // }

    guestlllisting()


  }, [query.get('pub_type')])



  const toggle = () => {
    document.getElementById("switch").style.width = "100%";

  }



  return (
    <div>

      <div className='row mx-0  map-row'>
        <div className='' id="overflowTest">
          <div className='py-4 h-100 w-100 overflow-y-auto order-1 order-lg-0 col-lg-6'>
            <div className='py-3 pl-lg-5 pr-lg-3'>
              <div className='border-bottom pb-2'>
                <div className='d-flex flex-column'>
                  <div className='col-md-12 d-flex mt-2 mb-3 mt-md-0 align-items-center justify-content-md-end'>
                    <span className='pr-2 '>
                      <img src="https://horsebnb.com:8081/assets/img/map.svg" style={{ height: "40px" }} />
                      <span className='fw-bold ms-2 fs-5 text-muted'>Show Map</span>
                    </span>
                    <span className='mtss ms-2' onClick={toggle}>
                      <input type="checkbox" id="switch"
                        class="checkbox " />
                      <label for="switch" class="toggle"></label>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='hello'>
              <div className='row ms-5'>
                <div className='col-md-6'>
                  <div class="dropdown w-75">
                    <button class="btn btn-light dropdown-toggle border w-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {(filters.filter(res => res.value == query.get("pub_type"))).length ? (filters.filter(res => res.value === query.get("pub_type")))[0].name
                        : 'Please choose type'}
                    </button>
                    <ul class="dropdown-menu">

                      {filters.map(res => {
                        return (
                          <>
                            <li key={res.value}><a class="dropdown-item text-start" onClick={() => onFilterApply("pub_type", res.value)}>{res.name}</a></li>
                          </>
                        )
                      })}

                    </ul>
                  </div>
                </div>
                <div className='col-md-6'>
                  {typedata == 1 ? <input type="text" className='form-control' placeholder='Check-in-out' /> : ""}
                  && {typedata == 2 ? <input type="text" className='form-control mtr' placeholder='Montly' /> : ""}
                  && {typedata == 3 ? <input type="text" className='form-control ghtyy' placeholder='check-in-out' /> :""}
                  && {typedata == 4 ? <input type="text" className='form-control' placeholder='check-in-out'/>:""}
                </div>

              </div>
              <div className='row ms-5 mt-5'>
                <div className='col-md-2'>
                  {typedata == 1 ? <input type="text" className='form-control' placeholder='stalls' /> : ""}
                  && {typedata == 2 ? <input type="text" className='form-control mtyy' placeholder='Stalls' /> : ""}
                  && {typedata == 3 ? <input type="text" className='form-control' placeholder='stalls' /> : ""} 
                  &&{typedata == 4 ? <input type="text" className='form-control' placeholder='Room' /> : ""}
                </div>
                <div className='col-md-2'>
                  <input type="text" className='form-control' placeholder='Price' data-bs-toggle="modal" data-bs-target="#exampleModal10" />
                </div>
                <div className='col-md-8'>
                  <input type="text" className='form-control' placeholder='location' />
                </div>

              </div>
            </div>



            <p className='text-end mt-5 fw-bold' role="button">Clear Filter</p>
            <hr />
            <div className='py-4' >

              {shortterm.map((result) => {
                return (
                  <div className='d-flex flex-column flex-md-row border-bottom py-4 '>
                    <div className='position-relative'>
                      <div className='result-img mr-3' style={{ width: "380px" }}>
                        <img src={`${imageurl}${result?.attributes?.publicData?.cover_photo?.url}`} className='w-100 rounded ms-2' />
                      </div>
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                      <div className='p-2'>
                        <h4 className='fw-bold mt-2  mb-4 ms-2 text-black'>{result?.attributes?.title?.slice(0, 5)}</h4>
                        <span className='ms-2'>{result?.attributes?.description?.slice(0, 7)}</span>
                      </div>
                      <div className='p-2'>
                        <span className='text-black ms-2'>${result?.attributes?.publicData?.listing_price}/Night</span>
                      </div>
                    </div>
                    <div className='mx-auto d-flex text-right flex-column justify-content-between'>
                      <div className='font-medium flex-grow-1 d-flex align-items-end'>
                        <Link to={`/booking-details/${result.id.uuid}/${result.id.hostId}`}>
                          {console.log(match.params.id)}
                        <div className='btn btn-primary mt-3'>View Details</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input type="range" class="form-range text-primary" id="volume" name="volume" />
                <input type="range" id="volume" name="volume"
                  min="0" max="100" />
                <label for="volume">Volume</label>

              </div>

            </div>
          </div>
        </div>

        <div className='px-md-0 col-lg-6 '>

          <i class="fa-solid fa-xmark " ></i>
          <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Time%20square%20mohali%20punjub,%20India%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123 movies</a>
        </div>

      </div>
    </div>
  )
}

export default Shorttermstalls