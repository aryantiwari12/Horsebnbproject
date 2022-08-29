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
import Calendarand from './components/menubar/Calendarand';
import CheckinCheckout from './components/menubar/CheckinCheckout';
import CalendarData from './components/menubar/CalendarData';
import Pricestall from './components/menubar/Pricestall';
import Stripe from './components/menubar/Stripe';
import Finish from './components/menubar/Finish';

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
          <Route path="/create-stall/step3/:id" element={<Createstallstep3 />} />
          <Route path="/create-stall/step5/:id" element={<Location />} />
          <Route path="/create-stall/step6/:id" element={<Amenities />} />
          <Route path="/create-stall/step7/:id" element={<Photos />} />
          <Route path="/create-stall/step8/:id" element={<Description />} />
          {/* <Route path="/create-stall/step8/687" element={<Description />} /> */}
          <Route path="/create-stall/sucessfull-hosting/:id" element={<Calendarandavailability />} />
          <Route path="/create-stall/step11/1/754" element={<CalendarData />} />
          <Route path="/create-stall/checkin-and-checkout/:id" element={<CheckinCheckout />} />
          <Route path="/create-stall/step12/772" element={<Pricestall />} />
          <Route path="/create-stall/step13/772" element={<Stripe />} />
          <Route path="/create-stall/last-step/772" element={<Finish />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  )
}

export default App;
