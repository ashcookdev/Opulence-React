import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


// Import your page components here
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import Footer from './pages/footer';
import LipFiller from './pages/Lipfiller';
import Face from './pages/face';
import AntiWrinkle from './pages/antiwrinkle';
import AntiWrinkleInjections from './pages/anti-wrinkleinjections';
import FatDissolving from './pages/fatdissolving';
import Packages from './pages/packages';
import Location from './pages/location';
import Locations from './pages/locations';
import Payment from './pages/payment';

// import BookingsPage from './pages/BookingsPage';


function App() {
  return (
    <>
    <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lipfiller" element={<LipFiller />} />
          <Route path="/face" element={<Face />} />
          <Route path="/antiwrinkle" element={<AntiWrinkle />} />
          <Route path="/antiwrinkleinjections" element={<AntiWrinkleInjections />} />
          <Route path="/fatdissolving" element={<FatDissolving />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/location" element={<Location />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/payment" element={<Payment />} />
          

          


          {/* <Route path="/bookings" element={<BookingsPage />} /> */}
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
