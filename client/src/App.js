import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import OnlineStore from './components/OnlineStore.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import SignUp from './components/SignUp.js';
import Event from './components/Event.js';
import Invite from './components/Invite.js';
import YourSecret from './components/YourSecret.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
          </Route>
          <Route exact path="/onlineStore">
            <OnlineStore />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
          <Route exact path="/invite">
            <Invite />
          </Route>
          <Route exact path="/yourSecret">
            <YourSecret />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App