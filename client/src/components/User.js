import React, { useState, useEffect } from 'react';
import YourWishList from './YourWishList';
import YourSecret from './YourSecret';

function User() {
  const [user, setUser] = useState("")
  const API = '/users';

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => setUser(data))
  }, [])

  // const userData = {content: user}

  // setUser("")
  //   fetch(API, {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(userData)
  //   })
  //   .then((res) => res.json())
  //   .then((data) => setUser(data))

  //   console.log(userData,"hello")
  return (
    <div>
      <YourWishList />
      <YourSecret />
    </div>
  )
}

export default User
