import React, { useState, useEffect } from 'react'

function User() {
  const [user, setUser] = useState([])
  const API = '/users';

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => setUser(data))
  }, [])

  return (
    <div>

    </div>
  )
}

export default User