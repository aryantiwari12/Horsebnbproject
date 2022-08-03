import React from 'react'
import { Button } from 'rsuite'

const Aboutus = () => {
  return (
    <div>
        <div className='container mb-0 position-relative'>
            <img src="https://horsebnb.com/assets/img/no_introducing_horsebnb.png" className='w-100 rounded'></img>
            <div className='text-block position-absolute text-white fs-5'>
                <p>INTRODUCING</p>
                <h1 className='fs-1 horse'>HorseBnB</h1>
                <Button className='border-0 rounded p-2'>Abouts us</Button>
                </div>
        </div>
    </div>
  )
}

export default Aboutus