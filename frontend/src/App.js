import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

// Import your page components here
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import StaffNav from './pages/staffnav'; // Import the new navbar
import Footer from './pages/footer';
import LipFiller from './pages/Lipfiller';
import Face from './pages/face';
import AntiWrinkle from './pages/antiwrinkle';
import AntiWrinkleInjections from './pages/anti-wrinkleinjections';
import FatDissolving from './pages/fatdissolving';
import Packages from './pages/packages';
import Locations from './pages/locations';
import Payment from './pages/payment';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Products from './pages/editproducts';
import AddProducts from './pages/addproducts';  

// Import your new pages here
import BookingsPage from './pages/BookingsPage';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"];
      
      // Check if user is part of the admin group
      if (userGroups && userGroups.includes('admin')) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log('user is not signed in');
    }
  }

  return (
    <>
      {isAdmin ? <StaffNav /> : <Navbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lipfiller" element={<LipFiller />} />
          <Route path="/face" element={<Face />} />
          <Route path="/antiwrinkle" element={<AntiWrinkle />} />
          <Route path="/antiwrinkleinjections" element={<AntiWrinkleInjections />} />
          <Route path="/fatdissolving" element={<FatDissolving />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />

          {/* New authenticated routes */}
          {isAdmin && <Route path="/bookings" element={<BookingsPage/>}/>}
          {isAdmin && <Route path='/dashboard' element= {<Dashboard/>} />}
          {isAdmin && <Route path="/editproducts" element={<Products/>} />} 
          {isAdmin && <Route path="/editproducts/add" element={<AddProducts />} /> }

        </Routes>
        {/* New navbar for authenticated routes */}
        <Footer/>
    </>
  );
}

export default App;


