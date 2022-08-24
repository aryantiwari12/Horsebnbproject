import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import CounterContextprovider from './components/context/CounterContext';
import Home from './components/Home/Home';
import ExplorehorseBnB from './components/Home/ExplorehorseBnB';
import Aboutus from './components/Home/Aboutus';
import Shorttermsstalls from './components/Home/Shorttermsstalls';
import Guestaccommodations from './components/Home/Guestaccommodations';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Monthly from './components/Home/Monthly';
import Horseadventures from './components/Home/Horseadventures';
import Secondheader from './components/header/Secondheader';
import Myaccounts from './components/MyAccounts/Myaccounts';
import Personalinfo from './components/MyAccounts/Personalinfo';
import { useState, useEffect } from 'react';
import heneceforthApi from './components/henceforthApi';
import Changespassword from './components/MyAccounts/Changespassword';
import Payments from './components/MyAccounts/Payments';
import Hoststalls from './components/menubar/Hoststalls';
import HeaderRounting from './components/HeaderRounting';
import Createstall from './components/menubar/Createstall';
import Createstallstep3 from './components/menubar/Createstallstep3';
import Location from './components/menubar/Location';
import Amenities from './components/menubar/Amenities';
import Photos from './components/menubar/Photos';
import Description from './components/menubar/Description';
import Calendarandavailability from './components/menubar/Calendarandavailability';

function App() {


  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="*" element={
            <HeaderRounting>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Myaccounts" element={<Myaccounts />} />
                <Route path="/Myaccounts/Personalinfo" element={<Personalinfo />} />
                <Route path="/Myaccounts/Changespassword" element={<Changespassword />} />
                <Route path="/Myaccounts/Payments" element={<Payments />} />
              </Routes>
            </HeaderRounting>} />
          <Route path="/host-stalls" element={<Hoststalls />} />
          <Route path="/create-stall/step1" element={<Createstall />} />
          <Route path="/create-stall/step3/651" element={<Createstallstep3 />} />
          <Route path="/create-stall/step5/657" element={<Location />} />
          <Route path="/create-stall/step6/670" element={<Amenities />} />
          <Route path="/create-stall/step7/675" element={<Photos />} />
          <Route path="/create-stall/step8/687" element={<Description />} />
          <Route path="/create-stall/step8/687" element={<Description />} />
          <Route path="/create-stall/sucessfull-hosting/703" element={<Calendarandavailability />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  )
}

export default App;
