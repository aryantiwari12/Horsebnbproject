import React from 'react'
import Header from './header/Header';

const HeaderRounting = ({children}) => {
  return (
    <div>
         <Header/>
         {children}
    </div>
  )
}

export default HeaderRounting