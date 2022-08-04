import React from 'react'
import IMAGE from "../../IMG/logo_horse.png";
import IMAGE1 from "../../IMG/search_grey.png";
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
const Secondheader = ({firstName,lastname}) => {


 console.log(firstName)   

    return (

     <div>
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
                                    <span>Start your search</span>
                                    <span className='search-icon-btn p-2 '>
                                        <img src={IMAGE1}></img>
                                    </span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#'>Host your Stalls</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#'>Host Guests</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#'>Host an Adventure</a>
                            </li>
                            <li className='nav-item'>
                                <img src="https://horsebnb.com/assets/img/chat-bubble.svg"></img>
                            </li>
                            <li className='nav-item'>
                                <div class="dropdown">
                                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://horsebnb.com/assets/img/default.png" className='pe-2' height="35px" width="35px" alt=""></img>
                                        <span>{firstName}{lastname}</span>
                                        
                                    </button>
                                    <ul class="dropdown-menu" >
                                        <li><a class="dropdown-item" href="#">Booking</a></li>
                                        <li><a class="dropdown-item" href="#">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="#">Manage Listing</a></li>
                                        <li><a class="dropdown-item" href="#">Account</a></li>
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Secondheader