import React, { useState, useEffect } from 'react';
import RSVP from './RSVP';

const inviteAPI = "http://localhost"

function Invite() {

  const [,set] = useState([])

  useEffect(() => {
    fetch(inviteAPI, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(console.log("Hello world!"))
    })
  }, [])

  return (
    <div>
      <RSVP />
      <form className="invite" onSubmit={console.log()} >
        <input type="text" id="invite" placeholder="Email" value="" onChange={console.log()} />
        <button className="sendButton" type="submit">Send</button>
        <button className="shareLinkButton" type="submit">Share Link</button>
      </form>
    </div>
  )
}

export default Invite
