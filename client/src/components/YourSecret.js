import React, { useEffect, useState } from 'react'

function YourSecret() {

  const [secret, setSecret] = useState([])
  const API2 = '/secret'

  useEffect(() => {
    fetch(API2)
      .then((res) => res.json())
      .then((data) => setSecret(data))
  }, [])

  return (
    <div>
      {secret}
    </div>
  )
}

export default YourSecret
