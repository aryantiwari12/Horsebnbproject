import React from 'react'
import { Link,useMatch } from 'react-router-dom'
import heneceforthApi from '../henceforthApi'

let id = (localStorage.getItem('secondID'))

const Amenitiesguest = () => {

    const match = useMatch('/create-guest/step6/:id')

    let Arraylist=["Private Room in House","Private Suite","Entire House","Private Bathroom","Shared Bathroom","Private Kitchen","Shared Kitchen","Wifi","Parking","TV","RV Parking/Trailer"]

    let List = new Map()
    const Amenitiesdata = (values, checked) => {
        if (checked) {
            List.set(values,values)
        } else {
            List.delete(values)
        }

    }

    const dataamenities = async () => {
        let AmenitiesList = []
        List.forEach((data) => {
            AmenitiesList.push(data)
        })
        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: id,
                publicData: {
                    amenities: { AmenitiesList },
                    stepsCompleted: [1, 3, 5, 6, 6, 6]
                }
            }
        )

    }








  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Amenities</span>
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
                    <div class="col">
                        <div class="p-3 ">
                            <p className='fs-3 text-start'>What amenities do you offer?</p>
                            <p className='text-start'>You will be able to add more amenities in your write up for your listing.</p>
                            <div class="overflow-scroll text-start">
                                {Arraylist.map((result) => {
                                    return (
                                        <>
                                            <input type="checkbox"
                                                value={result}
                                                className="me-3"
                                                onChange={(e) => { Amenitiesdata(result, e.target.checked); { console.log(result, e.target.checked) } }}

                                            />
                                            <span className="font">{result}</span><br />

                                        </>
                                    )
                                })}


                            </div>
                            <hr></hr>
                            <div className=''>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>

                                <p className='float-start p-2' role="button">Back</p>

                                   <Link to={`/create-guest/step7/${match?.params.id}`}>
                                    <button className='float-end border-0 bg-primary  p-2 text-white' onClick={dataamenities}>Next</button>
                                    </Link>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/guest_steps.png"></img>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Amenitiesguest