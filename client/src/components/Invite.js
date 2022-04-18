import React from 'react';
import RSVP from './RSVP'

function Invite() {
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
