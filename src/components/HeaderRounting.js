import React from 'react'
import Header from './header/Header';

const HeaderRounting = ({name}) => {
  return (
    <div>
         <Header/>
         {name}
    </div>
  )
}

export default HeaderRounting