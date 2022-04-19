import React from 'react'

function Event() {
  return (
    <div>
      <form className="event" onSubmit={console.log()}>
        <input className="when" type="text" placeholder="When is it happening" value="" onChange={console.log()} />
        <input className="deadline" type="text" placeholder="Signup deadline" value="" onChange={console.log()} />
        <button className="exchange" type="submit">In person/By email</button>
        {/* <a className="virtual" href="https://zoom" /> */}
        <p>Budget</p>
      </form>
    </div>
  )
}

export default Event
