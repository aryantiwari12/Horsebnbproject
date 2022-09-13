import React from 'react'
import Footer from './Footer/Footer';
import Header from './header/Header';

const HeaderRounting = ({children}) => {
  return (
    <div>
         <Header/>
         {children}
         <Footer />
    </div>
  )
}

export default HeaderRounting