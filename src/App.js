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
import Getready from './components/menubar/Getready';
import Managelisting from './components/managelisting/Managelisting';
import Dashboard from './components/Dashboard/Dashboard';
import Hostguests from './components/hostguests/Hostguests';
import Createguest from './components/hostguests/Createguest';
import Guests from './components/hostguests/Guests';
import Locationguests from './components/hostguests/Locationguests';
import Amenitiesguest from './components/hostguests/Amenitiesguest';
import Photosguest from './components/hostguests/Photosguest';
import Descriptionguest from './components/hostguests/Descriptionguest';
import CheckInCheckhost from './components/hostguests/CheckInCheckhost';
import Calendarandavailabilityhost from './components/hostguests/Calendarandavailabilityhost';
import Calendaranddatehost from './components/hostguests/Calendaranddatehost';
import Pricehost from './components/hostguests/Pricehost';
import Stripconnecthost from './components/hostguests/Stripconnecthost';
import Finishhost from './components/hostguests/Finishhost';
import Readytohost from './components/hostguests/Readytohost';
import Adventurehome from './components/Adventure/Adventurehome';
import Adventuretitle from './components/Adventure/Adventuretitle';
import Locationadventure from './components/Adventure/Locationadventure';
import Adventurepage from './components/Adventure/Adventurepage';
import Adventurephotos from './components/Adventure/Adventurephotos';
import Settingadventure from './components/Adventure/Settingadventure';
import Settingability from './components/Adventure/Settingability';
import SetyourAvailabilityAdventure from './components/Adventure/SetyourAvailabilityAdventure';
import Mulitpleavailability from './components/Adventure/Mulitpleavailability';
import Calendarandadventure from './components/Adventure/Calendarandadventure';
import SecondRounting from './components/SecondRounting';
import PricingAdventure from './components/Adventure/PricingAdventure';
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
                <Route path="/manage-listing/publish-listing/:id" element={<Getready />} />
                <Route path="/manage-listing" element={<Managelisting />} />
                <Route path="/list-details/dashboard" element={<Dashboard />} />
                <Route path="/manage-listing/publish-listing/:id" element={<Readytohost />} />


              </Routes>
            </HeaderRounting>} />

            <Route path="/host-an-experience" element={
            <SecondRounting>
              <Routes>
                <Route path="/" element={<Adventurehome />} />
              </Routes>
            </SecondRounting>}/>




          <Route path="/host-stalls" element={<Hoststalls />} />
          <Route path="/create-stall/step1" element={<Createstall />} />
          <Route path="/create-stall/step3/:id" element={<Createstallstep3 />} />
          <Route path="/create-stall/step5/:id" element={<Location />} />
          <Route path="/create-stall/step6/:id" element={<Amenities />} />
          <Route path="/create-stall/step7/:id" element={<Photos />} />
          <Route path="/create-stall/step8/:id" element={<Description />} />
          <Route path="/create-stall/sucessfull-hosting/:id" element={<Calendarandavailability />} />
          <Route path="/create-stall/step11/1/:id" element={<CalendarData />} />
          <Route path="/create-stall/checkin-and-checkout/:id" element={<CheckinCheckout />} />
          <Route path="/create-stall/step12/:id" element={<Pricestall />} />
          <Route path="/create-stall/step13/:id" element={<Stripe />} />
          <Route path="/create-stall/last-step/:id" element={<Finish />} />
          <Route path="/create-stall/availability/2/:id" element={<Calendarand />} />
          <Route path="/host-guests" element={<Hostguests />} />
          <Route path="/create-guest/step1" element={<Createguest />} />
          <Route path="/create-guest/step3/:id" element={<Guests />} />
          <Route path="/create-guest/step5/:id" element={<Locationguests />} />
          <Route path="/create-guest/step6/:id" element={<Amenitiesguest />} />
          <Route path="/create-guest/step7/:id" element={<Photosguest />} />
          <Route path="/create-guest/step8/:id" element={<Descriptionguest />} />
          <Route path="/create-guest/checkin-and-checkout/:id" element={<CheckInCheckhost />} />
          <Route path="/create-guest/sucessfull-hosting/:id" element={<Calendarandavailabilityhost />} />
          <Route path="/create-guest/step11/1/:id" element={<Calendaranddatehost />} />
          <Route path="/create-guest/step12/:id" element={<Pricehost />} />
          <Route path="/create-guest/step13/:id" element={<Stripconnecthost />} />
          <Route path="/create-guest/last-step/:id" element={<Finishhost />} />
          {/* <Route path="/host-an-experience" element={<Adventurehome />} /> */}
          <Route path="/add-experience/step1" element={<Adventuretitle />} />
          <Route path="/add-experience/step2/:id" element={<Locationadventure />} />
          <Route path="/add-experience/step4/:id" element={<Adventurepage />} />
          <Route path="/add-experience/step5/:id" element={<Adventurephotos />} />
          <Route path="/add-experience/step6/:id" element={<Settingadventure />} />
          <Route path="/add-experience/step10/:id" element={<Settingability />} />
          <Route path="/add-experience/step7/:id" element={<SetyourAvailabilityAdventure />} />
          <Route path="/add-experience/step11/:id" element={<Mulitpleavailability />} />
          <Route path="/add-experience/calender-availability/:id" element={<Calendarandadventure />} />
          <Route path="/add-experience/step8/:id" element={<PricingAdventure/>} />

        </Routes>
      </div>
    </Router>


  )
}

export default App;
