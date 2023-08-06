import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import HomePage from './components/HomePage';
import About from './components/About';
import Login from './components/Login';
import Appointment from './components/Appointments';
import CarWraps from './components/CarWraps/carWraps';
import Detailing from './components/Detailing/detailing';
import DentRepair from './components/DentRepair/dentRepair';




//Style
import './App.css';

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/Appointment" element={<Appointment/>} />
          {/* <Route path="/sign-up" element={SignUp} /> */}
          <Route path="/Login" element={<Login/>} />
          <Route path="/CarWraps" element={<CarWraps/>}/>
          <Route path="/Detailing" element={<Detailing/>}/>
          <Route path="/DentRepair" element={<DentRepair/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
