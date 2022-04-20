import React from 'react'

function YourWishListCard({user}) {

  function handleDeleteBtn() {
    fetch('/destroy', {
      method: 'DELETE',
    })
  }

  return (
    <div>
      {user}
      <button className="delete-btn" onClick={handleDeleteBtn}>🗑</button>
    </div>
  )
}

export default YourWishListCard
