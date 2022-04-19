import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <NavLink exact to="/signup">
          Sign Up
      </NavLink>
      <NavLink exact to="/event">
          Set up event
      </NavLink>
      <NavLink exact to="/invite">
          Invite
      </NavLink>
      <NavLink exact to="/RSVP">
          Event Details
      </NavLink>
      <NavLink exact to="/onlineStore">
          Shop with us
      </NavLink>
    </div>
  )
}

export default Nav
