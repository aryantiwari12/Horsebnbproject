import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi'
import Timeformat from '../../utils/Timeformat'
import "../Adventure/Adventure.css"
import { months } from 'moment'

const SetyourAvailabilityAdventure = () => {

    const match = useMatch('/add-experience/step7/:id')
    const weeks = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday']
    const Time = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
        '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM']

    const [modaltype, setmodaltype] = useState("")

    const [sunday, setsunday] = useState({
        checked: false,
        slots: []
    })
    const [Monday, setMonday] = useState({
        checked: false,
        slots: []
    })
    const [Tuesday, setTuesday] = useState({
        checked: false,
        slots: []
    })
    const [Wednesday, setwednesday] = useState({
        checked: false,
        slots: []
    })
    const [Thursday, setThursday] = useState({
        checked: false,
        slots: []
    })
    const [Friday, setFriday] = useState({
        checked: false,
        slots: []
    })
    const [saturday, setsaturday] = useState({
        checked: false,
        slots: []
    })






    const [sizedata, setsizedata] = useState("")
    const [timedata, settimedata] = useState("")
    // const [datastore, setdatastore] = useState("")
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
    let timedata1 = Timeformat.Timedata(date)

    const availabilitydata = async () => {

        let mapData = []

        let AmenitiesList = []
        List.forEach((data) => {
            AmenitiesList.push(data)
        })
        let mapdata = []
        let res = await henceforthApi.Auth.Updatedlisting(
            {
                id: match.params.id,
                publicData: {
                    stepsCompleted: [],


                },
                availabilityPlan: {
                    type: "availability-plan/time",
                    duration: sizedata,
                    timeSlots: [
                        {
                            abbr: "sun",
                            dayOfWeek: 1,
                            isChecked: sunday.checked,
                            name: "sunday",
                            slots: sunday.slots
                        },
                        {
                            abbr: "Mon",
                            dayOfWeek: 2,
                            isChecked: Monday.checked,
                            name: "Monday",
                            slots: Monday.slots
                        },
                        {
                            abbr: "Tue",
                            dayOfWeek: 3,
                            isChecked: Tuesday.checked,
                            name: "Tuesday",
                            slots: Tuesday.slots
                        },
                        {
                            abbr: "Wen",
                            dayOfWeek: 4,
                            isChecked: Wednesday.checked,
                            name: "Wensday",
                            slots: Wednesday.slots
                        },
                        {
                            abbr: "Thu",
                            dayOfWeek: 5,
                            isChecked: Thursday.checked,
                            name: "Thusday",
                            slots: Thursday.slots
                        },
                        {
                            abbr: "Fri",
                            dayOfWeek: 6,
                            isChecked: Friday.checked,
                            name: "Firday",
                            slots: Friday.slots
                        },
                        {
                            abbr: "Sat",
                            dayOfWeek: 7,
                            isChecked: saturday.checked,
                            name: "Saturday",
                            slots: saturday.slots
                        }

                    ],

                }
            }
        )



    }
    const addtime = () => {

        let startTime = timedata;
        let endTime = timedata1;
        if (modaltype == 'Sunday') {
            const { slots } = sunday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setsunday({
                ...sunday,
                slots: newSlot
            })
        }
        if (modaltype == 'Monday') {
            const { slots } = Monday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setMonday({
                ...Monday,
                slots: newSlot
            })
        }
        if (modaltype == 'Tuesday') {
            const { slots } = Tuesday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setTuesday({
                ...Tuesday,
                slots: newSlot
            })
        }
        if (modaltype == 'Wensday') {
            const { slots } = Wednesday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setwednesday({
                ...Wednesday,
                slots: newSlot
            })
        }
        if (modaltype == 'Thursday') {
            const { slots } = Thursday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setThursday({
                ...Thursday,
                slots: newSlot
            })
        }
        if (modaltype == 'Friday') {
            const { slots } = Friday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setFriday({
                ...Friday,
                slots: newSlot
            })
        }
        if (modaltype == 'Saturday') {
            const { slots } = saturday
            let newSlot = [...slots, { startTime: startTime.slice(12, 17), endTime: endTime }]
            setsaturday({
                ...saturday,
                slots: newSlot
            })
        }
        // setinput([...addinput, { startTime: timedata, endtime: timedata1 }])



    }
    const modaldata = (modaltype) => {
        if (modaltype == 'Sunday') {
            return sunday
        } else if (modaltype == 'Monday') {
            return Monday
        } else if (modaltype == 'Tuesday') {
            return Tuesday
        } else if (modaltype == 'Wensday') {
            return Wednesday
        } else if (modaltype == 'Thursday') {
            return Thursday
        } else if (modaltype == 'Friday') {
            return Friday
        } else if (modaltype == 'Saturday') {
            return saturday
        } else {
            return sunday
        }
    }
    console.log(sunday)
    const handlechange = () => {

    }
    const handledelete = (modaltype, index) => {

        if (modaltype == 'Sunday') {
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setsunday({
                ...sunday,
            })
        }else if(modaltype=='Monday'){
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setMonday({
                ...Monday,
            })
        }else if(modaltype=='Tuesday'){
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setTuesday({
                ...Tuesday,
            })
        }else if(modaltype=='wensday'){
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setwednesday({
                ...Wednesday,
            })
        }else if(modaltype=='Thursday'){
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setThursday({
                ...Thursday,
            })
        }else if(modaltype=='Friday'){
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setFriday({
                ...Friday,
            })
        }else if(modaltype=='Saturday'){
            const removedata = modaldata(modaltype).slots.splice(index, 1)
            setsaturday({
                ...saturday,
            })
        }




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
                            <button className=' float-start border-0 p-3 text-white badge badge-primary'>Single Day slots</button><br /><br />
                            <p className='text-start mt-3'>Slot Size (In Hours)</p>
                            <input type="text" className='float-start from-control' value={sizedata} onChange={(e) => { setsizedata(e.target.value); { console.log(e.target.value) } }} placeholder='Please Enter Size..' required /><br /><br />
                            <p className='text-start'>Set Schedule</p>
                        </div>
                        <div class="p-3 border bg-light mt-2 ">
                            <div className='text-start'>
                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" value="Sunday" onMouseOver={() => setmodaltype("Sunday")} onChange={(e) => { setsunday({ ...sunday, checked: e.target.checked }); }} data-bs-target="#exampleModal9" />
                                <span className='ms-2 fs-6 fw-bold'>Sunday</span>
                                <span className='ms-5  p-2'>{sunday.slots.map((result) => { { console.log(result) } return (<>{result.startTime} - {result.endTime}</>) })}</span>

                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span><br />
                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" onMouseOver={() => setmodaltype("Monday")} onChange={(e) => { setMonday({ ...Monday, checked: e.target.checked }); }} data-bs-target="#exampleModal9" />

                                <span className='ms-2 fs-6 fw-bold'>Monday</span>
                                <span className='ms-5  p-2'>{Monday.slots.map((res) => { return (<>{res.startTime} - {res.endTime}</>) })}</span>
                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span><br />


                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal9" onMouseOver={() => setmodaltype("Tuesday")} onChange={(e) => { setTuesday({ ...Tuesday, checked: e.target.checked }); }} />
                                <span className='ms-2 fs-6 fw-bold'>Tuesday</span>
                                <span className='ms-5  p-2'>{Tuesday.slots.map((res) => { return (<>{res.startTime} - {res.endTime}</>) })}</span>

                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span><br />
                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal9" onMouseOver={() => setmodaltype("Wensday")} onChange={(e) => { setwednesday({ ...Wednesday, checked: e.target.checked }); }} />
                                <span className='ms-2 fs-6 fw-bold'>Wednesday</span>
                                <span className='ms-5  p-2'>{Wednesday.slots.map((res) => { return (<>{res.startTime} - {res.endTime}</>) })}</span>

                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span><br />
                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal9" onMouseOver={() => setmodaltype("Thursday")} onChange={(e) => { setThursday({ ...Thursday, checked: e.target.checked }); }} />
                                <span className='ms-2 fs-6 fw-bold'>Thursday</span>
                                <span className='ms-5  p-2'>{Thursday.slots.map((res) => { return (<>{res.startTime} - {res.endTime}</>) })}</span>
                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span><br />
                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal9" onMouseOver={() => setmodaltype("Friday")} onChange={(e) => { setFriday({ ...Friday, checked: e.target.checked }); }} />
                                <span className='ms-2 fs-6 fw-bold'>Friday</span>
                                <span className='ms-5  p-2'>{Friday.slots.map((res) => { return (<>{res.startTime} - {res.endTime}</>) })}</span>
                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span><br />
                                <input type="checkbox" className='ms-2 fs-1 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal9" onMouseOver={() => setmodaltype("Saturday")} onChange={(e) => { setsaturday({ ...saturday, checked: e.target.checked }); }} />
                                <span className='ms-2 fs-6 fw-bold'>Saturday</span>
                                <span className='ms-5  p-2'>{saturday.slots.map((res) => { return (<>{res.startTime} - {res.endTime}</>) })}</span>
                                <span className='float-end'><i class="fa-solid fa-plus text-success" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9" ></i> Add time slots</span>
                            </div>

                            <div class="modal fade" id="exampleModal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 className="modal-title text-center " id="exampleModalLabel9">Add Time Slots {modaltype}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                        </div>
                                        <div class="modal-body d-flex ">
                                            <select class="form-select w-100" aria-label="Default select example" value={timedata} onChange={(e) => { settimedata(e.target.value); { console.log(e.target.value) } }}>
                                                <option selected>Select Time</option>
                                                {Time.map((time) => {

                                                    return (
                                                        <>
                                                            <option>Start Time: {time}</option>
                                                        </>
                                                    )
                                                })}


                                            </select>

                                            <input value={"End Time:" + " " + timedata1} className='ms-2 form-control' disabled />



                                            <button className='ms-5 rounded w-50 border bg-success text-white' onClick={addtime} >Add</button>


                                        </div>
                                        {modaldata(modaltype).slots.map((key, value) => {
                                            return (
                                                <>

                                                    <div className='d-flex p-2'>
                                                        <input type="text" value={"Start Time:" + key.startTime} className='w-100 p-2 ms-3' />
                                                        <input type="text" value={"End Time:" + " " + key.endTime} className='w-100 p-2 ms-3' />
                                                        <button className='ms-5 bg-success w-50 text-white rounded' onClick={() => handledelete(modaltype,value)} >Remove</button>
                                                    </div>
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

                            <Link to={`/add-experience/calender-availability/${match.params.id}`}>
                                <button className='float-end border-0 badge badge-primary  p-3 fs-3 text-white' onClick={availabilitydata}>Next</button>
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