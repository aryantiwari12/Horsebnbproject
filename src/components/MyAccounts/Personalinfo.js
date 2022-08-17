import React from 'react'
import { Button } from 'rsuite'
import IMAGE from "../../IMG/profile.png"
import { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom';
import heneceforthApi from '../henceforthApi';
const Personalinfo = () => {

    const [legals, setlegals] = useState(false)
    const [Gender, setGender] = useState(false)
    const [dateofbirth, setdateofbirth] = useState(false)
    const [emailaddress, setemailaddress] = useState(false)
    const [PhoneNumber, setPhoneNumber] = useState(false)
    const [about, setabout] = useState(false)
    const [Address, setAddress] = useState(false)
    const [Language, setLanguage] = useState(false)

    const [file, setFile] = useState(null); // upload picture 

    const [genderdata,setgenderdata]=useState("") // Genderstate 
    const [languagedata,setlanguagedata]=useState("")// languagedata
    
    

    

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
            gender:"",
            address:"",
            age:"",
            language:"",
            image:""
        },
        bio:""

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
        setGender(false)
        setdateofbirth(false)
        setemailaddress(false)
        setPhoneNumber(false)
        setabout(false)
        setAddress(false)
        setLanguage(false)

    }
    const editgender = () => {
        setGender(true)

    }
    const editDate = () => {
        setdateofbirth(true)
    }
    const editemail = () => {
        setemailaddress(true)
    }
    const editphone = () => {
        setPhoneNumber(true)
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
        showalldata()
    }
    const Savegender=async()=>{
      
        
         let res=await heneceforthApi.Auth.editdata({
            publicData:{gender:genderdata}
            
        })
        
       
    }
    const Dateofbirth=async()=>{
        let res=await heneceforthApi.Auth.editdata({
            publicData:{age:profiledata.age}
        })
    }
    const Saveemail=async()=>{
        let res=await heneceforthApi.Auth.editdata(profiledata)
    }
    const Savephone=async()=>{
        let res=await heneceforthApi.Auth.editdata({
            protectedData: {phoneNumber:profiledata.phoneNumber}
        })
    }
    const Savebio=async()=>{
        let res=await heneceforthApi.Auth.editdata(profiledata)

    }
    const Saveaddress=async()=>{
        let res=await heneceforthApi.Auth.editdata({
            publicData:{address:profiledata.address}
        })
    }
    const Languagechange=async()=>{
        let res=await heneceforthApi.Auth.editdata({
            publicData:{language:languagedata}
        })
    }



    const uploadfile = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0])
        console.log(file)

    }



    const uploadimages=async()=>{
        if (file == null) {
            return ""
        }
        let res=await heneceforthApi.Auth.editdata({
            publicData:{image:file.name}
        })
        const formdata = new FormData()
        formdata.append("image", file)
       
        let filename = res.data.filename
        console.log(filename)
    }
   

    

    //Get all data fetch the API

    const showalldata= async ()=>{
        let res=await heneceforthApi.Auth.getdata()
        .then((res)=>{
            // setprofiledata(res.data.attributes.profile)
            setprofiledata(res.data)
            setgenderdata(res.data.attributes.profile.publicData)
            setlanguagedata(res.data.attributes.profile.publicData)
        })
    }
    useEffect(()=>{
        return()=>{
            showalldata()
        }
    },[])

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
                                        <img src={file ? URL.createObjectURL(file):''} className='rounded-circle border border-success w-25 h-25'></img>
                                    </div>
                                    <div className=''></div>
                                    <input ref={fileRef} hidden type="file" accept="image/*"  onChange={uploadfile}/>
                                    <Button onClick={() =>  {fileRef.current.click();uploadimages()}} className='bg-success border-0 rounded text-white p-2'>Upload</Button>
                                    
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
                                {legals == true ? "" : <p>{profiledata?.attributes?.profile?.firstName} {profiledata?.attributes?.profile?.lastName}</p>}

{/* {console.log(profiledata.attributes?.email)}
{console.log(profiledata?.attributes?.profile?.firstName)} */}
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
                                    {Gender == true ?
                                        <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                        : <h5 className='text-success' role="button" onClick={editgender}>Edit</h5>}
                                </div>
                                {Gender == true ?
                                    <div className='col-md-12'>
                                        <div class="dropdown">
                                            <select className='w-100 border p-2' id="rdoSelect" value={genderdata}  onChange={(e)=>setgenderdata(e.target.value)} >
                                                <option> Choose Gender</option>
                                                <option name="gender" value="Male">Male</option>
                                                <option name="gender" value="Female">Female</option>
                                            </select>
                                        </div>
                                        <button className='bg-success mt-2 border-0 text-white p-2' onClick={Savegender}>Save</button>
                                    </div> : <p>{genderdata.gender}</p>}
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

                                        <input type="date" placeholder='select Date of Birth' className='form-control' value={profiledata.age} onChange={changeingvalue} name="age"></input>

                                        <button className='bg-success mt-2 border-0 text-white p-2' onClick={Dateofbirth}>Save</button>
                                    </div> : <p>{profiledata?.attributes?.profile?.publicData?.age}</p>}
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5 className='flex-grow-1'>Email address</h5>
                                    <h5 className='pe-2 text-success' role="button">Verify</h5>
                                    {emailaddress == true ?
                                        <h5 className='text-success'  role="button" onClick={canceldata}>Cancel</h5>
                                        : <h5 className='text-success' role="button" onClick={editemail}>Edit</h5>}
                                </div>
                                <p>{profiledata.attributes?.email}</p>
                                {emailaddress == true ?
                                    <div className='col-md-12'>

                                        <input type="Email" placeholder='Email' value={profiledata.attributes?.email} onChange={changeingvalue} className='form-control' name="email"></input>
                                        <button className='bg-success mt-2 border-0 text-white p-2' onClick={Saveemail}>Save</button>

                                    </div>
                                    : ""}
                            </div>
                            <div className='border px-4 py-3 mb-4'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <h5>Phone Number</h5>
                                    {PhoneNumber==true?
                                    <h5 className='text-success' role="button" onClick={canceldata}>Cancel</h5>
                                    :<h5 className='text-success' role="button" onClick={editphone}>Edit</h5>}
                                </div>
                                {PhoneNumber==true?
                                <div className='col-md-12'>
                                    <p>For notifications, reminders, and help logging in</p>
                                    <input type="tel" className='form-control' value={profiledata.phoneNumber} onChange={changeingvalue} placeholder='Enter phone Number' name="phoneNumber" />
                                    <button className='bg-success mt-2 border-0 text-white p-2' onClick={Savephone} >Save</button>
                                </div>:<p>{profiledata?.attributes?.profile?.protectedData?.phoneNumber}</p>}
                                
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
                                    <textarea className='w-100' placeholder="Tell me yourself" value={profiledata.bio} onChange={changeingvalue} name="bio" />
                                    <button className='bg-success mt-2 border-0 text-white p-2' onClick={Savebio}>Save</button>
                                </div>:<p>{profiledata?.attributes?.profile?.bio}</p>}
                                
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
                                    <input type="text" className='form-control w-100' value={profiledata.address} onChange={changeingvalue} name="address" />
                                    <button className='bg-success mt-2 border-0 text-white p-2' onClick={Saveaddress}>Save</button>
                                </div>:<p>{profiledata?.attributes?.profile?.publicData?.location}</p>}
                                
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
                                        <select class=" w-100 p-2" value={languagedata} onChange={(e)=>setlanguagedata(e.target.value)}>
                                            <option>select Language</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="English">English</option>
                                            <option value="German">German</option>
                                        </select>
                                    </div>
                                    <button className='bg-success mt-2 border-0 text-white p-2' onClick={Languagechange}> Save </button>
                                </div>:<p>{languagedata.language}</p>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalinfo