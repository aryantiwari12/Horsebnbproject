import React from 'react';
import IMAGE from "../../IMG/logo_horse.png";
import "../header/style.css";
import 'react-phone-number-input/style.css'
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CounterContext } from "../context/CounterContext"
import heneceforthApi from "../henceforthApi";
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import { contains } from 'rsuite/esm/DOMHelper';
import Secondheader from './Secondheader';
import { useEffect } from 'react';
import IMAGE1 from "../../IMG/search_grey.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loadingspinear from '../Loading/Loadingspinear';


const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

const Header = () => {


    // heneceforthApi.setToken(localStorage.getItem('token'))

    const notify = () => toast("user Login sucessfully!");
    const [values, setValues] = useState()
    const navigate = useNavigate();
    const [post, setpost] = useState()
    const [images1, setimages1] = useState("")
    const [agree, setAgree] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
            country_code: ""
        }

    })

    const [logindata, setlogindata] = useState({
        username: "",
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

        setIsLoading(true)
        let res = await heneceforthApi.Auth.signup(profiledata, {
            protectedData: profiledata.phoneNumber
        })
        setIsLoading(false)

        localStorage.setItem("token", res.data.token)
        //  console.log(res)
    }


    const Logindatavalue = async () => {

        setIsLoading(true)
        let res = await heneceforthApi.Auth.login(logindata)
        setIsLoading(false)
        localStorage.setItem("token", res.data.token);
        console(res.data.token)



    }

    const showheaderdata = () => {
        // setshowheader(true)
    }
    const checkboxHandler = () => {

        setAgree(!agree);

    }


    heneceforthApi.setToken(localStorage.getItem('token'))

    const getprofile = async () => {

        let res = await heneceforthApi.Auth.getdata()
            .then((res) => {
                setprofiledata(res.data.attributes.profile)
                setimages1(res.data.attributes.profile.publicData.profile_image)
                console.log(res)
            })



    }

    useEffect(() => {
        return () => {
            getprofile()
        };
    }, [])


    const logoutdata = () => {
        localStorage.clear()
        navigate('');

    }



    return (
        <div>
            {
                localStorage.getItem('token') ?
                    // <Secondheader firstName={profiledata.firstName} lastname={profiledata.lastName}/>
                    <nav class="navbar navbar-expand-lg bg-light shadow">
                        <div class="container-fluid">
                            <img src={IMAGE}></img>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                    <li class="nav-item border rounded">
                                        <a href='' class="pointer search-btn col-lg-12 col-md-6">
                                            <span className="text-black">Start your search</span>
                                            <span className='search-icon-btn p-2 '>
                                                <img src={IMAGE1}></img>
                                            </span>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/host-stalls">
                                            <a href='#' className="text-black">Host your Stalls</a>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/host-guests">
                                            <a href='#' className="text-black">Host Guests</a>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className="text-black">Host an Adventure</a>
                                    </li>
                                    <li className='nav-item'>
                                        <img src="https://horsebnb.com/assets/img/chat-bubble.svg"></img>
                                    </li>
                                    <li className='nav-item'>
                                        <div class="dropdown">
                                            <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={`${imageurl}${images1}`} className='pe-2 rounded-circle' height="30px" width="40px" alt=""></img>
                                                <span>{profiledata.firstName} {profiledata.lastName}</span>

                                            </button>
                                            <ul class="dropdown-menu" >
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                                <li><a class="dropdown-item" href="#"><Link to="/list-details/dashboard" className="text-black">Dashboard</Link></a></li>
                                                <li><a class="dropdown-item" href="#"><Link to="/manage-listing" className="text-black">Manage Listing</Link></a></li>
                                                <li><a class="dropdown-item" href="#"><Link to={"/Myaccounts"} className="text-black">Account</Link></a></li>
                                                <li><a class="dropdown-item" href="/" onClick={logoutdata}>Logout</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav> :
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
            }
            {/* First Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Login</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className='form-control' onChange={changesdata} value={logindata.username} name="username" placeholder='Email Address'></input>
                            <input type="text" className='form-control mt-2' onChange={changesdata} value={logindata.password} name="password" placeholder='Password'></input>
                            <div className='d-flex algin-item-center justifiy-content-center'>
                                <div className='col-6 text-start  d-flex'>
                                    <input type="checkbox" className='pt-2 px-2' onChange={checkboxHandler}></input>
                                    <p className=' pt-2 px-2' >Remember me</p>
                                </div>
                                <div className='col-6  text-end pt-2 p-3'>
                                    <p className='text-success'>Forgot Password?</p>

                                </div>
                            </div>
                            <ToastContainer />
                            {!isLoading && <button className='w-100   border-0 p-2  text-white rounded' onClick={(e) => { Logindatavalue(); notify() }} style={{ backgroundColor: "#54BAB9" }} id="spin" disabled={!agree} >  Login</button>}
                            {isLoading && <button className='w-100   border-0 p-2  text-white rounded ' style={{ backgroundColor: "#54BAB9" }} role="status" disabled><i class="fas  fa-spinner fa-spin fs-2"></i></button>}
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
                            <h4 class="modal-title" id="exampleModalLabel">Sign Up</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className='form-control' onChange={changesdata} value={profiledata.firstName} name="firstName" placeholder='first Name'></input>
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
                                <input type="checkbox" className='pt-1' onChange={checkboxHandler}></input>
                                <p className='pt-3 px-2'>Agree To <a href='#'><span className='text-danger'>Term & condition </span></a> </p>
                            </div>
                            {!isLoading && <button className='w-100 p-2 border-0 text-white rounded' onClick={Signupdata} style={{ backgroundColor: "#54BAB9" }} disabled={!agree}>Sign Up</button>}
                            {isLoading && <button className='w-100 p-2 border-0 text-white rounded' style={{ backgroundColor: "#54BAB9" }} disabled><i class="fas  fa-spinner fa-spin fs-2"></i></button>}

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