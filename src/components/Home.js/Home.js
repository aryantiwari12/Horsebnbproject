import React from 'react'

export const Home = () => {
    return (
        <div>
            <div className='container  mt-3 '>
                <div className='d-flex gap-5'>
                    <p className='text-start ' role="button">Short Term stells</p>
                    <p className='' role="button">Monthly Board</p>
                    <p role="button">Guest Accommodations</p>
                    <p role="button">Horse Adventures</p>
                </div>
                <div className='mt-2 shadow'>
                    <p className='text-start'>Where<br/>
                        <input type="text" classname="border-0"></input>
                    </p>
                </div>
            </div>
        </div>
    )
}
