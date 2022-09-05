import React from 'react'
import { Link } from 'react-router-dom'
import "../Adventure/Adventure.css"
import IMAGE from '../../IMG/banner.jpg'

const Adventurehome = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_new.svg"></img>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search">
                            <Link to="/add-experience/step1">
                                <button className='bg-primary rounded p-2 text-white border-0' type="submit">Get Started</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col p-5">
                        <div class="p-3 ">
                            <p className='text-start fw-bold'>HOST ADVENTURES ON HORSEBNB</p>
                            <p className='text-start fs-1'>Earn <span className='text-success'>money</span> sharing your <span className='text-success'>horse Adventures</span> with the world.</p>
                        </div>
                        <button className='bg-dark text-white float-start rounded p-2'>Let's go</button>
                    </div>
                    <div class="col ">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/host/jonathan.png" className='w-75' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4  text-center'>
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <p className='mt-2 fs-6'>HorseBnB Adventures are horse activities created by horse people for anyone and everyone. Whether you’ve never ridden a horse or you are an experienced horse person, there is a horse adventure for you. All skill levels are welcome with HorseBnB Adventures.</p>
                    <hr className='w-25 mx-auto d-block fs-1 fw-bold' />
                </div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4  text-center'>
                    <h1>How it works</h1>
                    <hr className='w-25 mx-auto d-block fs-1 fw-bold' />
                    <p className='mt-2 fs-6'>Hosting a horse adventures is simple with HorseBnB. To start hosting follow the simple steps below.</p>

                </div>

            </div>
            <div class="container px-4 text-center mt-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/design_your_experience.png" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <h3 className='text-start'>Design your adventure</h3>
                            <p className='text-start'>All adventures start with our quality standards. Think about how to engage with guests online and make your adventure stand out from the pack. This includes using high quality pictures and great descriptions to attract customers.</p>
                            <hr className='w-25 rr' />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-4 text-center mt-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <h2 className='text-start'>Submit your adventure</h2>
                            <p className='text-start'>Click the “Start creating your adventure” button to create your horse adventure listing. Follow the steps to create a listing that includes a complete description of your horse adventure, pictures of your adventure, what’s included, and what guests need to bring.</p>
                            <hr className='w-25 rr' />
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/submit_your_experience.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-4 text-center mt-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/host/jefferson.png" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <h3 className='text-start'>Start hosting</h3>
                            <p className='text-start'>Once your listing is complete you’re ready to host your first guests. Be sure to prepare everything you need to provide your guests with the best horse adventure possible!</p>
                            <hr className='w-25 rr' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col'></div>
                <div className='col'>
                    <button className='mx-auto d-block btn btn-outline-info'>start creating your adventure</button>
                </div>
                <div className='col'></div>
            </div>
            <div className='mt-5 '>
                <img src={IMAGE} className="w-100" />
                <div className='position-relative'>
                    <p className='fw-bold fs-1 text-black text-center'>Learn more about hosting<br /> with HorseBnB Accommodations</p>
                    <button className='bg-dark position-absolute rounded p-2'>Let's go</button>
                </div>

            </div>
        </div>
    )
}

export default Adventurehome