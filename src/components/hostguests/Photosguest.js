import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import IMAGE from '../../IMG/publish.png';
import { useState, useRef, useEffect } from 'react';
import "../hostguests/hots.css";
import axios from 'axios';
import heneceforthApi from '../henceforthApi';

let id = (localStorage.getItem('secondID'))

const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

const Photosguest = () => {

    const match = useMatch('/create-guest/step7/:id')
    const fileRef = useRef();
    const [store, setstore] = useState()
    const [file, setfile] = useState("")
    const [imageshow,setimageshow]=useState(false)
    const [buttonshow,setbuttonshow]=useState(true)

    const [images, setimages] = useState("")
    

    const uploadfile = (e) => {
        
        console.log(e.target.files);
        setfile(e.target.files[0])
        setimageshow(true)
        setbuttonshow(false)

    }
    
    

        const uploadImages = async () => {

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
            // console.log(filename)
            setstore(filename)
            updateimage(filename)
    
    
        }
        const updateimage = async (filename) => {

            let res = await heneceforthApi.Auth.Updatedlisting(
                {
                    id: id,
                    images: [],
                    publicData: {
                        cover_photo: {
                            id: id,
                            url: filename,
                            caption: ""
    
                        },
                        images: []
    
                    }
    
                }
                
            )
    
        }
        const showalldata = async () => {
        
            let res = await heneceforthApi.Auth.Listid(id)
            setimages(res?.data)
        }
        useEffect(() => {
            return () => {
                showalldata()
            }
        }, [])

    




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
                        <div class="p-3 ">
                            <p className='text-start fs-3'>Add photos to your listing</p>
                            <p className='text-start'>Upload at least one photo to publish your listing. We strongly suggest adding multiple photos to attract attention to your listing. Do not include images of your barn name or contact information.</p>
                            <div className='btn-square p-5'>
                                <img src={IMAGE} /><br />
                                <input ref={fileRef} type="file" accept="image/*" id="imgg" hidden onChange={uploadfile} />

                               
                                 {buttonshow===true?<button className='border-0 bg-success text-white p-2'  onClick={() =>{fileRef.current.click();}}>Upload Photos</button>:<button className="border-0 bg-success text-white p-2" onClick={uploadImages}>Upload</button>}<br />
                                
                              
                            </div>
                           
                            <div className='p-2 border w-50 mt-2'>
                                <button className='float-start border '>Cover photo</button>
                                <span><i class="fa-solid fa-trash" role="button"></i></span>
                                <span className='ms-2'><i class="fa-solid fa-pen" role="button"></i></span>
                                
                               
                                <img src={`${imageurl}${images?.attributes?.publicData?.cover_photo?.url}`} className="mt-2 w-100"/>
                                {console.log(store)}
                            </div>
                            <div className='mt-5'>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>

                                <p className='float-start p-2' role="button">Back</p>

                                <Link to={`/create-guest/step8/${match?.params.id}`}>
                                    <button className='float-end border-0 bg-primary  p-2 text-white'>Next</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3 border bg-light text-start">
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" />
                            <p>Quick tips for quality photos</p>
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

export default Photosguest