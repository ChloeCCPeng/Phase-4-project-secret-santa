import React, { useState } from 'react'

function Event() {

  const [gift, setGift] = useState(false)

  return (
    <div>
      <form className="event" onSubmit={console.log()}>
        <input className="when" type="text" placeholder="When is it happening" value="" onChange={console.log()} />
        <input className="deadline" type="text" placeholder="Signup deadline" value="" onChange={console.log()} />
      <React.Fragment>
        {gift && <h3>Gift</h3>}
        <button className="exchange" onClick={() => setGift(!gift)}>In person/By email</button>
      </React.Fragment>
        {/* <a className="virtual" href="https://zoom,com" /> */}
        <p>$500.00 Budget</p>
      </form>
    </div>
  )
}

export default Event
