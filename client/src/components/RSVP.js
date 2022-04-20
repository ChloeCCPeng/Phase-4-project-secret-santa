import React, { useState, useEffect } from 'react';

function RSVP() {

  const [rsvp, setRsvp] = useState(false);

  useEffect(() => {
    fetch('/RSVP')
      .then(res => res.json())
      .then((data) => setRsvp(data))
  }, [])

  return (
    <div>
      <h2>RSVP</h2>
      <React.Fragment>
        {rsvp && <h3>Participating</h3>}
      <h3>{rsvp.name}<button className="rsvp" onClick={() => setRsvp(!rsvp)}>RSVP</button></h3>
      </React.Fragment>
    </div>
  )
}

export default RSVP
