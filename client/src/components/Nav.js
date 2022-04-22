import React from 'react'
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import Event from "./Event";
// import Invite from "./Event";
import RSVP from "./Event";


function Nav() {
  return (
    <div>
      {/* <NavLink exact to="/signup">
        <SignUp />
      </NavLink>
      <NavLink exact to="/event">
        <Event />
      </NavLink>
      <NavLink exact to="/invite">
        <Invite />
      </NavLink>
      <NavLink exact to="/RSVP">
          <RSVP />
      </NavLink> */}
      <NavLink exact to="./SignUp">
        SignUp
      </NavLink>
      <NavLink exact to="/event">
        <Event />
      </NavLink>
      <NavLink exact to="/RSVP">
          <RSVP />
      </NavLink>
    </div>
  )
}

export default Nav
