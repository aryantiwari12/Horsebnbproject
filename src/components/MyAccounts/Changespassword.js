import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Changespassword = () => {

    const [currentpassworddata,setcurrentpassworddata]=useState("")
    const [newpassworddata,setnewpassworddata]=useState("")
    const [hide, sethide] = useState(false)

    const hidedata = () => {
        hide ? sethide(false) : sethide(true)

    }

    const changeingvalue=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setcurrentpassworddata({
            ...currentpassworddata,
            [name]:value
        })
        setnewpassworddata({
            ...newpassworddata,
            [name]:value
        })
        console.log(name)
        console.log(value)
         
    }
    const updatedpassword=()=>{
        
    }
    

    return (
        <div>
            <div className='container'>
                <div className='mt-5'>
                    <Link to="/myaccounts">
                        <h6 className='text-start'>Account</h6>
                    </Link>
                    <i class="fa-solid fa-angle-right text"></i>
                    <p className='text-center'>Update Password</p>
                    <h1 className='heading-large mt-0 mb-5 text-black line-height-space'>Update Password</h1>
                    <div className='row justify-content-md-between"'>
                        <div className='col-md-7 col-lg-7'>
                            <div className='border px-4 py-3'>
                                <div className='d-flex justify-content-between '>
                                    <h4>Password</h4>
                                    
                                    {hide===true?
                                    <h4 className='text-success' role="button" onClick={hidedata}>Cancel</h4>
                                    :
                                    <h4 className='text-success' role="button" onClick={hidedata}>Update</h4>}

                                </div>
                                {hide === true ?
                                    <div>
                                        <p className='fs-6 mt-2'>Current password</p>
                                        <input type="text" className='form-control' value={currentpassworddata.currentPassword} placeholder='Enter current password' onChange={changeingvalue} name="currentPassword"/>
                                        <p className='fs--6 mt-2'>New password</p>
                                        <input type="text" className='form-control' placeholder='Enter New password' />
                                        <p className='fs--6 mt-2'>confirm password</p>
                                        <input type="text" className='form-control' value={newpassworddata.newPassword} placeholder='Enter confirm password' onChange={changeingvalue} name="newPassword" />
                                        <button className='mt-5 bg-success border-0 p-2 text-white' onClick={updatedpassword}>Update password</button>
                                    </div>
                                    : ""}
                            </div>

                        </div>
                        <div className='col-md-5 col-lg-4 '>
                            <div className="border px-4 py-3 mb-4">
                                <img src="https://horsebnb.com/assets/img/Key.svg"/>
                                <h6 className='text-dark mt-2 fs-4'>Keeping your account secure</h6>
                                <p>We regularly review accounts to make sure they’re as secure as possible. We’ll also let you know if there’s more we can do to increase the security of your account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Changespassword