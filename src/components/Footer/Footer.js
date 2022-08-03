import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='container-fluid bg-dark'>
                <div className='conatiner'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer mt-5'>
                            <img src="https://horsebnb.com/assets/img/logo_white_new.png"></img>
                            <p className='text-white mt-2'><i class="fa-solid fa-copyright"></i> 2022 HorseBnB, Inc.</p>
                        </div>
                        <div className='col-md-6 col-lg-3 cursor-pointer mt-5 w-25'>
                            <ul className='text-white text-start'>
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer mt-5'>
                            <ul className='text-white text-start'>
                                <li><i class="fa-brands fa-facebook"></i> Facebook</li>
                                <li><i class="fa-brands fa-instagram"></i> Instagram</li>
                                <li className='faqq'><i class="fa-solid fa-clipboard-question"></i> Faq</li>
                                
                            </ul>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer mt-5'>
                          <img src="https://horsebnb.com/assets/img/app-store.png" role="button"/><br/>
                          <img src="https://horsebnb.com/assets/img/google-play.png" role="button" className='mt-2'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer