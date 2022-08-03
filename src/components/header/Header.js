import React from 'react';
import IMAGE from "../../IMG/logo_horse.png";
import "../header/style.css";
import 'react-phone-number-input/style.css'
import { useState } from 'react';
import { useContext } from 'react';
import { CounterContext } from "../context/CounterContext"
import heneceforthApi from "../henceforthApi";
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
const Header = () => {

    const [values, setValues] = useState()

    const [profiledata, setprofiledata] = useState({
        firstname: "",
        lastName: "",
        email: "",
        password: "",
        deviceId: "string",
        protectedData: {
            phoneNumber: ""
        },
        publicData: {
            country_code: ""
        }

    })

    const [logindata, setlogindata] = useState({
        email: "",
        password: "",
        deviceType: 3,
        fcmId: "string"
    })

    const changesdata = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setprofiledata({
            ...profiledata,
            [name]: value
        })
        setValues({
            ...values,
            [name]: values
        })

        setlogindata({
            ...logindata,
            [name]: value
        })

    }

    const Signupdata = async () => {


        let res = await heneceforthApi.Auth.signup(profiledata, {
            protectedData: profiledata.phoneNumber
        })


    }

    const Logindatavalue = async () => {

        let res = await heneceforthApi.Auth.login(logindata)
        localStorage.setItem("token", res.data.token);
        console(res.data.token)
    }




    return (
        <div>

            <nav class="navbar navbar-expand-lg shadow">
                <div class="container-fluid">
                    <img src={IMAGE}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div class="d-flex" role="search">
                            <button className='me-5 border-0 bg-white fs-5' data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                            <button class="btn btn- text-white fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal1" type="submit" style={{ backgroundColor: "#54BAB9" }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* First Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className='form-control' onChange={changesdata} value={logindata.email} name="email" placeholder='Email Address'></input>
                            <input type="text" className='form-control mt-2' onChange={changesdata} value={logindata.password} name="password" placeholder='Password'></input>
                            <div className='d-flex algin-item-center justifiy-content-center'>
                                <div className='col-6 text-start  d-flex'>
                                    <input type="checkbox" className='pt-2 px-2'></input>
                                    <p className=' pt-2 px-2'>Remember me</p>
                                </div>
                                <div className='col-6  text-end pt-2 p-3'>
                                    <p className='text-success'>Forgot Password?</p>
                                </div>
                            </div>
                            <button className='w-100 border-0 p-2  text-white rounded' onClick={Logindatavalue} style={{ backgroundColor: "#54BAB9" }}>Log in</button>
                            <div className='mt-2'>
                                <strong className='mt-2'>Or Continue with</strong>

                                <button className='border p-2 w-100'>Login with Facebook</button>
                                <button className='border p-2 w-100 mt-2'>Login with Google</button>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <p className='mx-auto'>Don't have an HorseBnB account ? <a className='text-danger' role="button"> Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second modal */}

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className='form-control' onChange={changesdata} value={profiledata.firstname} name="firstname" placeholder='first Name'></input>
                            <input type="text" className='form-control mt-2' onChange={changesdata} value={profiledata.lastName} name="lastName" placeholder='Last Name'></input>
                            <input type="text" className='form-control mt-2' onChange={changesdata} value={profiledata.email} name="email" placeholder='Enter Email'></input>
                            {/* <PhoneInput placeholder="Enter phone number"  name="phoneNumber" className='form-control mt-2' value={values}  onChange={(e)=>{country(e);changesdata()}}
                                defaultCountry="us" country="US" 
                            /> */}

                            <div class="input-group mb-3 mt-2">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">INDIA</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">+91</a></li>
                                    <li><a class="dropdown-item" href="#">us(+1)</a></li>
                                </ul>
                                <input type="tel" class="form-control" value={profiledata.protectedData.phoneNumber} onChange={changesdata} name="protectedData" aria-label="Text input with dropdown button" />
                            </div>












                            <input type="password" className='form-control mt-2' onChange={changesdata} value={profiledata.password} name="password" placeholder='Password'></input>
                            <input type="password" className='form-control mt-2' onChange={changesdata} value={profiledata.confirm} name="confirmpassword" placeholder='Confirm password'></input>
                            <div className='text-start d-flex'>
                                <input type="checkbox" className='pt-1'></input>
                                <p className='pt-3 px-2'>Agree To <a href='#'><span className='text-danger'>Term & condition </span></a> </p>
                            </div>
                            <button className='w-100 p-2 border-0 text-white rounded' onClick={Signupdata} style={{ backgroundColor: "#54BAB9" }} >Sign Up</button>
                          
                            <p className='mt-3'>or with Continue</p>
                            <button className='w-100 '>Continue with Facebook</button>
                            <button className='w-100 mt-2'>Continue with Google</button>

                        </div>
                        <div class="modal-footer">
                            <p className='mx-auto'>Already have an HorseBnB account ? <span className='text-danger' role="button"> Log In </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header