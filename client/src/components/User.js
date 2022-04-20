import React, { useState, useEffect } from 'react';
import YourWishList from './YourWishList';
import YourSecret from './YourSecret';

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
      <YourWishList />
      <YourSecret />
    </div>
  )
}

export default User
