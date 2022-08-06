import React from 'react'
import { Button } from 'rsuite'
import IMAGE from "../../IMG/profile.png"
import { useState,useRef } from 'react'
import { Link } from 'react-router-dom';
import heneceforthApi from '../henceforthApi';
const Personalinfo = () => {

    const [legals, setlegals] = useState(false)
    const [gender, setgender] = useState(false)
    const [dateofbirth, setdateofbirth] = useState(false)
    const [emailaddress, setemailaddress] = useState(false)
    const [phoneNumber, setphoneNumber] = useState(false)
    const [about, setabout] = useState(false)
    const [Address, setAddress] = useState(false)
    const [Language, setLanguage] = useState(false)
    const [profiledata, setprofiledata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        deviceId: "string",
        protectedData: {
            phoneNumber: ""
        },
        publicData: {
            country_code: "",
            gender:""
        }

    })

    const changeingvalue=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setprofiledata({
            ...profiledata,
            [name]:value
        })
        console.log(name)
        console.log(value)

        
    }


    const fileRef = useRef();

    const editdata = () => {
        setlegals(true)

    }
    const canceldata = () => {
        setlegals(false)
        setgender(false)
        setdateofbirth(false)
        setemailaddress(false)
        setphoneNumber(false)
        setabout(false)
        setAddress(false)
        setLanguage(false)

    }
    const editgender = () => {
        setgender(true)

    }
    const editDate = () => {
        setdateofbirth(true)
    }
    const editemail = () => {
        setemailaddress(true)
    }
    const editphone = () => {
        setphoneNumber(true)
    }
    const editabout=()=>{
        setabout(true)
    }
    const editaddress=()=>{
        setAddress(true)
    }
    const editLanguage=()=>{
        setLanguage(true)
    }
    const Savename= async ()=>{
        
        let res = await heneceforthApi.Auth.editdata(profiledata)
    }
    const Savegender=async()=>{
        let res=await heneceforthApi.Auth.editdata(profiledata)
        document.getElementById('Male')
    }
    const Saveemail=async()=>{
        let res=await heneceforthApi.Auth.editdata(profiledata)
    }
    const Savephone=async()=>{
        // let res=await heneceforthApi.Auth.editdata(profiledata)
        let res=await heneceforthApi.Auth.editdata({
            protectedData: {phoneNumber: phoneNumber }
        })
    }


    return (
        <div>
            <div className='container'>
                <div className='mt-5'>
                    <Link to="/myaccounts">
                      <h6 className='text-start'>Account</h6>
                    </Link>
                    <i class="fa-solid fa-angle-right text"></i>
                    <p className='text-center'>Personal info</p>
                    <h1 className='heading-large mt-0 mb-5 text-black line-height-space'>Personal Info</h1>
                    <div className='row justify-content-md-between"'>
                        <div className='col-md-4 col-lg-4'>
                            <div className="border p-4 mb-4">
                                <div className='text-center'>
                                    <div className='book-img mx-auto mb-3 w-100 h-100 position-relative'>
                                        <img src={IMAGE} className='rounded-circle border border-success w-25 h-25'></img>
                                    </div>
                                    <div className=''></div>
                                    <input ref={fileRef} hidden type="file" accept="image/*"/>
                                    <Button onClick={() =>  fileRef.current.click()} className='bg-success border-0 rounded text-white p-2'>Upload</Button>
                                    
                                </div>
                            </div>
                            <div className='border px-4 py-4 mb-4'>
                                <img src='https://horsebnb.com/assets/img/business-card.svg'></img>
                                <h5 className='mt-2'><b>What info is shared with others?</b></h5>
                                <p>HorseBnB only release contact information for hosts and guests after a reservation is confirmed.</p>
                            </div>
                        </div>
                        <div className='col-md-8 col-lg-8'>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Legal Name</h5>
                                    {legals == true ?
                                        <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                        : <h5 className='text-success' role="button" onClick={editdata}>Edit</h5>}
                                </div>
                                {legals == true ? "" : <p>Aryan Tiwari</p>}


                                {legals == true ?
                                    <div className='row'>
                                        <p>This is the name on your travel document, which could be a licence or a passport.</p>
                                        <div className='col-md-6'>
                                            <strong>First Name</strong>
                                            <input type="text" value={profiledata.firstName} className='form-control' onChange={changeingvalue} name="firstName"></input>
                                        </div>
                                        <div className='col-md-6'>
                                            <strong>Last Name</strong>
                                            <input type="text" value={profiledata.lastName} className='form-control' onChange={changeingvalue} name="lastName"></input>
                                        </div>
                                        <div className='col-md-12 mt-2'>
                                            <button className='bg-success text-white border p-2' onClick={Savename}>Save</button>
                                        </div>
                                    </div> : ""}

                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Gender</h5>
                                    {gender == true ?
                                        <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                        : <h5 className='text-success' role="button" onClick={editgender}>Edit</h5>}
                                </div>
                                {gender == true ?
                                    <div className='col-md-12'>
                                        <div class="dropdown">
                                            <button class="dropdown-toggle w-100 text-start border bg-white p-2 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Choose Gender
                                            </button>
                                            <ul class="dropdown-menu w-100">
                                                <li><a class="dropdown-item" id="male" value={profiledata.Male} name="Male" onChange={changeingvalue} href="#">Male</a></li>
                                                <li><a class="dropdown-item" id="female" value={profiledata.Female} name="female" onChange={changeingvalue} href="#">Female</a></li>
                                            </ul>
                                        </div>
                                        <button className='bg-success mt-2 border-0 text-white p-2' onClick={Savegender}>Save</button>
                                    </div> : <p>Male</p>}
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Date of Birth</h5>
                                    {dateofbirth == true ?
                                        <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                        : <h5 className='text-success' role="button" onClick={editDate}>Edit</h5>}
                                </div>
                                {dateofbirth == true ?
                                    <div className='col-md-12'>

                                        <input type="date" placeholder='select Date of Birth' className='form-control'></input>

                                        <button className='bg-success mt-2 border-0 text-white p-2'>Save</button>
                                    </div> : <p>Not spacefied</p>}
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5 className='flex-grow-1'>Email address</h5>
                                    <h5 className='pe-2 text-success' role="button">Verify</h5>
                                    {emailaddress == true ?
                                        <h5 className='text-success'  role="button" onClick={canceldata}>Cancel</h5>
                                        : <h5 className='text-success' role="button" onClick={editemail}>Edit</h5>}
                                </div>
                                <p>aryan.tiwari@gmail.com</p>
                                {emailaddress == true ?
                                    <div className='col-md-12'>

                                        <input type="Email" placeholder='Email' value={profiledata.email} onChange={changeingvalue} className='form-control' name="email"></input>
                                        <button className='bg-success mt-2 border-0 text-white p-2' onClick={Saveemail}>Save</button>

                                    </div>
                                    : ""}
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Phone Number</h5>
                                    {phoneNumber==true?
                                    <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                    :<h5 className='text-success' role="button" onClick={editphone}>Edit</h5>}
                                </div>
                                {phoneNumber==true?
                                <div className='col-md-12'>
                                    <p>For notifications, reminders, and help logging in</p>
                                    <input type="tel" className='form-control' value={profiledata.phoneNumber} onChange={changeingvalue} placeholder='Enter phone Number' name="phoneNumber" />
                                    <button className='bg-success mt-2 border-0 text-white p-2' onClick={Savephone} >Save</button>
                                </div>:<p>98584545645</p>}
                                
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>About</h5>
                                    {about==true?
                                    <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                    :<h5 className='text-success' role="button" onClick={editabout}>Edit</h5>}
                                </div>
                                {about==true?
                                <div className='col-md-12'>
                                    <textarea className='w-100' placeholder='Tell me yourself' />
                                    <button className='bg-success mt-2 border-0 text-white p-2'>Save</button>
                                </div>:<p>Not spacefied</p>}
                                
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Address</h5>
                                    {Address==true?
                                    <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                    :<h5 className='text-success' role="button" onClick={editaddress}>Edit</h5>}
                                </div>
                                {Address==true?
                                <div className='col-md-12'>
                                    <input type="text" className='form-control w-100' />
                                    <button className='bg-success mt-2 border-0 text-white p-2'>Save</button>
                                </div>:<p>Not spacefied</p>}
                                
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Language</h5>
                                    {Language==true?
                                    <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                   : <h5 className='text-success' role="button" onClick={editLanguage}>Edit</h5>}
                                </div>
                                {Language==true?
                                <div className='col-md-12'>
                                    <div class="dropdown">
                                        <button class="bg-white border dropdown-toggle w-100 text-start rounded p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Choose Language
                                        </button>
                                        <ul class="dropdown-menu w-100">
                                            <li><a class="dropdown-item" href="#">Hindi</a></li>
                                            <li><a class="dropdown-item" href="#">English</a></li>
                                            <li><a class="dropdown-item" href="#">German</a></li>
                                        </ul>
                                    </div>
                                </div>:<p>Not spacefied</p>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalinfo