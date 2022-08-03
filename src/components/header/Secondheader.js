import React from 'react'
import IMAGE from "../../IMG/logo_horse.png";

const Secondheader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg shadow">
                <div class="container-fluid">
                    <img src={IMAGE}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div class="d-flex border p-1 " role="search">
                            <p>Aryan Tiwari</p>
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Secondheader