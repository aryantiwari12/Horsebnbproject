import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { Link, useMatch } from 'react-router-dom'
import IMAGE from '../../IMG/publish.png';
import henceforthApi from '../henceforthApi';


const Adventurephotos = () => {

    const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

    const match = useMatch('/add-experience/step5/:id')
    const fileRef = useRef();
    const [file, setfile] = useState("")
    const [store, setstore] = useState("")
    const [imageshow, setimageshow] = useState(false)
    const [buttonshow, setbuttonshow] = useState(true)

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

        let res = await henceforthApi.Auth.Updatedlisting(
            {
                id: match.params.id,
                images: [],
                publicData: {
                    cover_photo: {
                        id: match.params.id,
                        url: filename,
                        caption: ""

                    },
                    images: []

                }

            }

        )

    }
    const showalldata = async () => {

        let res = await henceforthApi.Auth.Listid(match.params.id)
        setimages(res?.data)
    }
    useEffect(() => {
        return () => {
            showalldata()
        }
    }, [])



    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Adventure Page</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">

                            <button class=" border-0 bg-white text-primary fs-3">Save & Exit</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center mt-5 p-5">
                <div class="row gx-5 p-5">
                    <div class="col ">
                        <div class="p-3 ">
                            <p className='text-start fs-4'>Add photos to your listing</p>
                            <p className='text-start'>Upload at least one photo to publish your listing. We strongly suggest adding multiple photos to attract attention to your listing. Do not include images of your barn name or contact information.</p>
                        </div>
                        <div className='btn-square p-5'>
                            <img src={IMAGE} /><br />
                            <input ref={fileRef} type="file" accept="image/*" id="imgg" hidden onChange={uploadfile} />


                            {buttonshow === true ? <button className='border-0 bg-success text-white p-2' onClick={() => { fileRef.current.click(); }}  >Upload Photos</button> : <button className="border-0 bg-info text-white p-2" onClick={uploadImages}>Upload</button>}<br />


                        </div>
                        <div className='p-2 border w-50 mt-2'>
                            <button className='float-start border '>Cover photo</button>
                            <span><i class="fa-solid fa-trash" role="button"></i></span>
                            <span className='ms-2'><i class="fa-solid fa-pen" role="button"></i></span>


                            <img src={file ? URL.createObjectURL(file):`${imageurl}${images?.attributes?.publicData?.cover_photo?.url}`} className="mt-2 w-100" />
                            {/* {console.log(store)} */}
                        </div>
                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            <Link to={`/add-experience/step6/${match?.params.id}`}>
                                <button className='float-end border-0 bg-primary  p-2 text-white'>Next</button>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 "></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventurephotos