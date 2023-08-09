import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import HomePage from './components/HomePage';
import About from './components/About';
import Appointment from './components/Appointments';
import CarWraps from './components/CarWraps/carWraps';
import Detailing from './components/Detailing/detailing';
import DentRepair from './components/DentRepair/dentRepair';
import Auth0ProviderWithHistory from './auth0Provider';
import Profile from './components/profile';




//Style
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Auth0ProviderWithHistory>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/Appointment" element={<Appointment/>} />
            <Route path="/CarWraps" element={<CarWraps/>}/>
            <Route path="/Detailing" element={<Detailing/>}/>
            <Route path="/DentRepair" element={<DentRepair/>}/>
            <Route path="/Profile" element={<Profile/>}/>
          </Routes>
        </Auth0ProviderWithHistory>
      </Router>
      
    </>
  );
}

export default App;
