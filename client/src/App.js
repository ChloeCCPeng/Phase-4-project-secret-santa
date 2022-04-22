import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import SignUp from './components/SignUp.js';

import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="signup">Sign Up</Link>
      </li>
      </ul>
    </nav>

    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  </div>
  )
  // return (
  //   <div className="App">
  //     <Home />
  //     <Nav/>
  //   </div>
  // );
}

export default App
