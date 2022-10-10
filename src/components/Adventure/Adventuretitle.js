import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import henceforthApi from '../henceforthApi'



const Adventuretitle = () => {

    const navigate = useNavigate(null)

    const [titledata, settitledata] = useState({
        title: ''
    })
    const [formerror, setformerror] = useState({})
    


    const continuetitle = async (e) => {

        e.preventDefault();

        if (titledata.title !== '') {
            let res = await henceforthApi.Auth.createdraftlisting(
                {
                    title: titledata,
                    publicData: {
                        stepsCompleted: [1],
                        type: 3
                    }
                }
            )
            navigate(`/add-experience/step2/${res.data.id.uuid}`)
        }else{
        setformerror(validate(titledata))
       
    }
}

    const validate = (values) => {
        const error = {};
        if (!values.title) {
            error.title = "please enter a title"
        }

        return error;
    }



    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light shadow">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png"></img>
                    <p className='fs-2 mt-3'>Title</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    </div>
                </div>
            </nav>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "14%" }}></div>
            </div>
            <div class="container px-4 text-center p-5">
                <div class="row gx-5">
                    <div class="col">
                        <form class="p-3" onSubmit={continuetitle}>
                            <p className='text-start fs-2'>Start creating your Horse<br /> Adventure!</p>
                            <p className='text-start'>Please create a catchy and descriptive title for your listing. This is the first thing potential guests will see so try and stand out from the crowd.</p>
                            <input type="text" className='form-control' placeholder='please Enter Title' name="title" value={titledata.title} onChange={(e) => { settitledata(e.target.value); { console.log(e.target.value) } }} />
                            <div className='float-start'>
                                <span className='text-danger' id="span1">{formerror.title}</span><br />
                                <button className='mt-5   fs-4 border-0 p-3 text-white badge badge-primary' >Continue</button>
                                {/* onClick={continuetitle} */}
                            </div>
                        </form>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/experience.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventuretitle