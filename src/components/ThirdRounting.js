import React from 'react'
import { Footer } from 'rsuite'
import Header from './header/Header'

const ThirdRounting = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        
    </div>
  )
}

export default ThirdRounting