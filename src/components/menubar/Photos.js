import React from 'react'
import IMAGE from '../../IMG/publish.png';
import { useState,useRef } from 'react';
import axios from 'axios';


const imageurl=`https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;



const Photos = () => {

    const fileRef = useRef();
    const [show, setshow] = useState(false)
    const [file,setfile]=useState("")

    const showimage=async()=>{
        setshow(true)
    }
    const uploadfile = (e) => {
        console.log(e.target.files);
        setfile(e.target.files[0])

    }

    const uploadImages=async()=>{

        if (file == null) {
            return ""
        }

        const url = `https://horsebnb.com:3001/v1/api/upload/aws?storageType=5&environment=4&isDefaultAsset=0`;
        const formdata = new FormData()
        formdata.append("file", file)
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                'Authorization': localStorage.getItem("token")
            },


        };
        let res = await axios.post(url, formdata, config)
        let filename = res.data.filename
        console.log(filename)
        
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Photos</span>
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
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col p-5">
                        <div class="p-3  rounded btn-square overflow-y-auto" >
                            <p className='text-start fs-3'>Add photos to your listing</p>
                            <p className='text-start'>Upload at least one photo to publish your listing. We strongly suggest adding multiple photos to attract attention to your listing. Do not include images of your barn name or contact information.</p>
                            <img src={IMAGE} /><br />
                            <input ref={fileRef} type="file" accept="image/*" hidden onChange={uploadfile} />
                            <button className='border-0 bg-success text-white p-2'   onClick={() => { fileRef.current.click(); showimage(); uploadImages() }}>Upload Photos</button><br/>
                          
                        </div>
                        {show===true?
                        <div className='p-2 border w-50 mt-2'>
                                   <button className='float-start border '>Cover photo</button>
                                   <span><i class="fa-solid fa-trash" role="button"></i></span>
                                   <span className='ms-2'><i class="fa-solid fa-pen" role="button"></i></span>
                                   <img src={file ? URL.createObjectURL(file):`${imageurl}`} className='w-100'/>
                            </div>:""}
                        <hr />
                        <div className=''>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            
                                <button className='float-end border-0 bg-primary  p-2 text-white' >Next</button>
                           
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3 text-start">
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='text-start'></img>
                            <p className='fs-3'>Quick tips for quality photos</p>
                            <ul>
                                <li>Use high quality photos to make your listing stand out</li>
                                <li>Make sure you have good lighting</li>
                                <li>Show off your listing</li>
                                <li>Use recent and up to date pictures</li>
                                <li>Add multiple photos to attract guests</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos