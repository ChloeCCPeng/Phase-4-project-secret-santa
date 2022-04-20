import React, { useEffect }from 'react'

const wishListAPI = "http://localhost/3000/wishlists"

function YourWishListCard() {



  function handleDeleteBtn() {
    fetch(wishListAPI, {
      method: 'DELETE',
    })
  }

  useEffect(() => {
    fetch(wishListAPI, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(console.log("Hello PATCH"))
    })
  })

  return (
    <div>
      
      <button className="edit-btn" onClick={(console.log("Edit me"))}>📝</button>
      <button className="delete-btn" onClick={handleDeleteBtn}>🗑</button>
    </div>
  )
}

export default YourWishListCard
