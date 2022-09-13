import React, { useState } from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom';
import moment from 'moment'
import Common from '../../utils/Common';
import henceforthApi from '../henceforthApi';
import "../Adventure/Adventure.css";

const Mulitpleavailability = () => {

    const match = useMatch(`/add-experience/step11/:id`)

    const [slotsize, setslotsize] = useState("");
    const [startdatedata, setstartdatedata] = useState("");
    const [startimedata, setstarttimedata] = useState("")
    const [endtimedata, setendtimedata] = useState("")
    const [adddata, setadddata] = useState([])
    const [showdata, setshowdata] = useState(false)



    let enddate = moment(startdatedata).add(slotsize, "days").format("MM/DD/YYYY")
    moment(enddate).format('YYYY/MM/DD')


    const handlechange = (time) => {

        let timeary = Common.hhmmToampm(time).toUpperCase()
        setstarttimedata(timeary)




    }
    const handlechange1 = (time) => {

        let timeary2 = Common.hhmmToampm(time).toUpperCase()
        setendtimedata(timeary2)


    }

    const addDay = async () => {
        let startDate = startdatedata
        let endDate = enddate
        let startTime = startimedata
        let endTime = endtimedata
        let oldData = adddata

        setadddata([...oldData, { startDate, endDate, startTime, endTime }])
        setendtimedata("")
        setstartdatedata("")
        setslotsize("")
        setendtimedata("")
        setstarttimedata("")

        let res = await henceforthApi.Auth.Updatedlisting({
            id: match.params.id,
            availabilityPlan: {
                type: "availability-plan/day",
                daySlots: [{
                    startTime: startimedata,
                    endTime: endtimedata,
                    startDate: startdatedata,
                    endDate: endDate
                }],
                duration: slotsize,
                publicData: { stepsCompleted: [1, 2, 4, 5, 6, 7, 7] }
            }
        })
    }
    const handledelete = () => {

    }

    // navigate(`/add-experience/calender-availability/${res.data.id.uuid}`)

    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Settings</span>
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
            <div class="container px-4 text-center">
                <div class="row row-cols-lg-2 row-cols-md-2">
                    <div class="col  p-5">
                        <div className='scroll_div px-2'>
                            <div class="p-3 ">
                                <p className='fs-3 text-start'>Set your Availability</p>
                                <p className='fs-6 text-start'>As a host it is very important that you keep your availability accurate.</p>
                                <button className='float-start bg-primary text-white border-0 p-2'>Multiple Day slots</button><br /><br />
                                <p className='text-start'>Slot Size (In Days)</p>
                                <input type="text" className="form-control w-50" maxLength="1" value={slotsize} onChange={(e) => { setslotsize(e.target.value); { console.log(e.target.value) } }} />
                                <div className='row row-cols-lg-2 row-cols-md-2'>
                                    <div className='col'>
                                        <div className='input-field data'>
                                            <label className='float-start'>Start Date</label>
                                            <br />
                                            <input type="date" className='form-control' value={startdatedata} onChange={(e) => { setstartdatedata(e.target.value); { console.log(e.target.value) } }} />

                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='input-field data'>
                                            <label className='float-start'>End  Date</label>
                                            <br />
                                            <input type="text" className='form-control' value={startdatedata ? enddate : ""} disabled />
                                            {/* {console.log(date)} */}
                                        </div>
                                    </div><br /><br />
                                    <div className='col'>
                                        <div className='input-field data'>
                                            <label className='float-start'>Start time</label>
                                            <br />
                                            <input type="time" className='form-control' value={startimedata.startTime} onChange={(e) => handlechange(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='input-field data'>
                                            <label className='float-start'>End  time</label>
                                            <br />
                                            <input type="time" className='form-control' value={endtimedata.endTime} onChange={(e) => handlechange1(e.target.value)} />
                                        </div>
                                    </div>
                                </div><br />
                                <button className='bg-success w-100 text-white p-2 border-0' onClick={addDay} >Add Day slots</button>
                                {adddata.map((items) => {
                                    return (
                                        <div className='mt-5 d-flex'>
                                            <p className='text-start fw-bold '>Date:</p>
                                            <span className='ms-2 fw-bold '>{moment(items.startDate).format('DD')} -  {moment(items.endDate).format('DD')}</span>
                                            <span className='ms-5 fw-bold'>Time:</span>
                                            <span className='fw-bold ms-2'>{items.startTime} - {items.endTime} <i class="fa-sharp fa-solid fa-trash text-success ms-2 " role="button" onClick={() => handledelete(items.adddata)}></i> </span>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className='mt-5'>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>

                                <p className='float-start p-2' role="button">Back</p>

                                <Link to={`/add-experience/step8/${match.params.id}`}>
                                    <button className='float-end border-0 bg-primary  p-2 text-white'>Next</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-3 border bg-light h-50">
                            <div className='float-start'>
                                <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='float-start' /><br /><br />
                                <p>Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don’t get any unwanted bookings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mulitpleavailability
