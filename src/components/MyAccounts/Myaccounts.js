import React from 'react'
import { Link } from 'react-router-dom';
import "../MyAccounts/myaccounts.css";
const Myaccounts = () => {
  return (
    <div>
      <div className="container ">
        <div className='mt-5'>
          <h3 className='text-start'>My Account</h3>
          <p className='fs-5'>Henece Forth , <span className='fs-6'>aryan.tiwari@gmail.com</span></p>

        </div>
        <div className="row ">
          <div className="col border  m-2 shadow" role="button">

            <img src="https://horsebnb.com/assets/img/business-card.svg" className="float-start mt-5" alt="" />
            <Link to={'/Myaccounts/personalinfo'}>
              <p className='mt-5'><b>Personal Info</b> <i class="fa-solid fa-angle-right text-success"></i></p>
              <p className="mt-5 text-start">Provide personal details and how we can reach you</p>
            </Link>
          </div>

          <div className="col border m-2  shadow">
            <img src="https://horsebnb.com/assets/img/Key.svg" className="float-start mt-5" alt="" />
            <Link to={'/changepassword'} id="hello">
              <p className='mt-5'><b>Change Password</b> <i class="fa-solid fa-angle-right text-success"></i></p>
              <p className="mt-5 text-start">Update your Password and secure your account</p>
            </Link>
          </div>
          <div className="col border m-2  shadow">
            <Link to={'/Notificationsetting'} id="hello">
              <img src="https://horsebnb.com/assets/img/line.svg" className="float-start mt-5" alt="" />
              <p className='mt-5'><b>Notification Setting</b> <i class="fa-solid fa-angle-right text-success"></i></p>
              <p className="mt-5 text-start">Review payments,payouts,copouns,Gift cards,and taxes</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myaccounts