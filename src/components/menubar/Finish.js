import React from 'react'

const Finish = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_new.svg" />

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">

                            <button class="text-primary border-0 bg-white fs-3" type="submit">Save & Exit</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center p-5">
                <div class="row gx-5 p-5">
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <p className='text-start fs-2'>Finish your listing to start <br/>earning..</p>
                            <p className='text-secondary text-start'>You can always edit your listing after you publish it.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <img src='https://horsebnb.com:8081/assets/img/create-stalls/finish_your_listing.svg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finish