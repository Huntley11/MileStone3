import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import About from './components/About';
import Appointment from './components/Appointment';

//Style
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} /> { /*Default Main page*/ }
        <Route path="/login" element={<LogIn/>} /> { /*LogIn page*/ }
        <Route path="/about" element={<About/>} /> { /*About the company*/ }
        <Route path="/appointment" element={<Appointment/>} /> { /*Schedule your appointment*/ }
      </Routes>
    </Router>
  );
}

export default App;
