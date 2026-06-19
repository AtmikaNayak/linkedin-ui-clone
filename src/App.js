import React from 'react'
import './App.css';
import { useState } from 'react'

import Navbar from './Navbar.js'
import Messages from './Messages.js'
import Home from './Home';
import Network from './Network';
import Job from './Job'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/jobs" element={<Job />}></Route>
      </Routes>
      <Messages />
    </BrowserRouter>
  );
}

export default App;
