import React, { useState, useEffect } from 'react';
import YourWishList from './YourWishList';

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
      <YourWishList user={user}/>
    </div>
  )
}

export default User
