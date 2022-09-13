import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi'


const SetyourAvailabilityAdventure = () => {

    const match = useMatch('/add-experience/step7/:id')
    const weeks = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday']
    const Time = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '4 PM', '3 PM', '4 PM', '5 PM', '6 PM']



    const [showtime, setshowtime] = useState(false)
    const [sizedata, setsizedata] = useState("")
    const [timedata, settimedata] = useState("")
    const [datastore, setdatastore] = useState("")
    const [endtimestore, setendtimestore] = useState("")
    const [addinput, setinput] = useState([])


    let List = new Map()
    const checkdata = (values, checked) => {
        if (checked) {
            List.set(values, values)
        } else {
            List.delete(values)
        }
    }
    let date = (Number(timedata.slice(11, 14)) + Number(sizedata))
    console.log(date)
    const dateformat = () => {
        if (date == '13') {
            return '1 PM'
        }
        else if (date == '14') {
            return '2 PM'
        }
        else if (date == '15') {
            return '3 PM'
        }
        else if (date == '16') {
            return '4 PM'
        }
        else if (date == '17') {
            return '5 PM'
        }
        else if (date == '18') {
            return '6 PM'
        }
        else if (date == '19') {
            return '7 PM'
        }
        else if (date == '20') {
            return '8 PM'
        }
        else if (date == '21') {
            return '9 PM'
        }
        else if (date == '22') {
            return '10 PM'
        }
        else if (date == '23') {
            return '11 PM'
        }
        else {
            return date
        }
    }
    const availabilitydata = async () => {

        let AmenitiesList = []
        List.forEach((data) => {
            AmenitiesList.push(data)
        })
        let res = await henceforthApi.Auth.Updatedlisting(
            {
                id: match.params.id,
                publicData: {
                    stepsCompleted: [],

                },
                availabilityPlan: {
                    duration: sizedata,
                    timeSlots: [
                        {
                            abbr: "sun",
                            dayOfWeek: 1,
                            isChecked: true,
                            name: "sunday",
                            slots: [{
                                startTime: (timedata.slice(11, 17)),
                                endTime: (dateformat())
                            }]
                        }
                    ],
                    type: "availability-plan/time",
                }
            }
        )


    }
    const addtime = () => {
        setshowtime(true)
        // setsizedata("")
        settimedata("")
        setdatastore(timedata)
        setendtimestore(dateformat())
        const abc = [...addinput,[]]
        setinput(abc)

    }
    const handlechange = () => {

    }
    const handledelete=(i)=>{
             const delval=[...addinput]
             delval.slice(i,1)
             setinput(delval)

    }



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
                <div class="row gx-5">
                    <div class="col p-5">
                        <div className=''>
                            <h2 className='text-start'>Set your Availability</h2>
                            <p className='text-start'>As a host it is very important that you keep your availability accurate.</p>
                            <button className='bg-success float-start border-0 p-2 text-white'>Single Day slots</button><br /><br />
                            <p className='text-start'>Slot Size (In Hours)</p>
                            <input type="text" className='float-start from-control' value={sizedata} onChange={(e) => { setsizedata(e.target.value); { console.log(e.target.value) } }} placeholder='Please Enter Size..' required /><br /><br />
                            <p className='text-start'>Set Schedule</p>
                        </div>
                        <div class="p-3 border bg-light mt-2 ">
                            {weeks.map((items) => {
                                return (
                                    <>
                                        <div className='text-start'>

                                            <input type="checkbox" value={items} onChange={(e) => { checkdata(items, e.target.checked); (console.log(items, e.target.checked)) }} className='ms-2' data-bs-toggle="modal" data-bs-target="#exampleModal9" />
                                            <span className='ms-2'>{items}</span>
                                            {/* {console.log(items)} */}

                                            <span className='float-end text-success' role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9"><i class="fa-solid fa-plus text-success" role="button" ></i> Add time slots</span>

                                        </div>

                                    </>
                                )
                            })}

                            <div class="modal fade" id="exampleModal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 className="modal-title text-center" id="exampleModalLabel9">Add Time Slots</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body d-flex ">
                                            <select class="form-select w-100" aria-label="Default select example" value={timedata} onChange={(e) => { settimedata(e.target.value); { console.log(e.target.value) } }}>
                                                <option selected>Select Time</option>
                                                {Time.map((time) => {
                                                    console.log(timedata.slice(11, 17))
                                                    return (
                                                        <>
                                                            <option>Start Time: {time}</option>
                                                        </>
                                                    )
                                                })}


                                            </select>

                                            <input value={"End Time:" + " " + dateformat()} className='ms-2 form-control' disabled />



                                            <button className='ms-5 rounded w-50 border bg-success text-white' onClick={addtime}>Add</button>


                                        </div>
                                        {addinput.map((key,index) => {
                                            return (
                                                <>
                                                    {showtime === true ?
                                                        <div className='d-flex p-2'>
                                                            <input type="text" value={"" + datastore} className='w-100 p-2 ms-3' onChange={(e)=>handlechange(index)} />
                                                            <input type="text" value={"End Time:" + " " + endtimestore} className='w-100 p-2 ms-3' />
                                                            <button className='ms-5 bg-success w-50 text-white rounded' onClick={handledelete} >Remove</button>
                                                        </div> : ""}
                                                </>
                                            )
                                        })} 


                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            <Link to="">
                                <button className='float-end border-0 bg-primary  p-2 text-white' onClick={availabilitydata}>Next</button>
                            </Link>
                        </div>
                    </div>
                    <div class="col mt-5">
                        <div class="p-3 border bg-light float-start">
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='float-start' /><br /><br />
                            <p className='text-start'>Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don’t get any unwanted bookings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetyourAvailabilityAdventure