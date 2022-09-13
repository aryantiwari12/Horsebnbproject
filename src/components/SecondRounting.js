import React from 'react'
import Footer from './Footer/Footer';
import Header from './header/Header';


const SecondRounting = ({children}) => {
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}

export default SecondRounting