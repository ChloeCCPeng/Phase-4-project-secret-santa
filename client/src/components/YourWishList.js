import React from 'react';
import YourWishListCard from './YourWishListCard'

function YourWishList({user}) {
  return (
    <div>
      <form className="wish-list" onSubmit={console.log()}>
        <input className="item-list"
          type="text"
          id="item"
          placeholder="Item"
          onchange={console.log()}
        />
        <button className="submitBtn" type="submit">Submit</button>
      </form>
      <YourWishListCard user={user} />
    </div>
  )
}

export default YourWishList
