import React from 'react';
import YourWishListCard from './YourWishListCard'

function YourWishList({user}) {
  return (
    <div>
      <YourWishListCard user={user} />
    </div>
  )
}

export default YourWishList
