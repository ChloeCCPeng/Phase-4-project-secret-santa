import React from 'react';
import YourWishListCard from './YourWishListCard'

function YourWishList() {
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
      <YourWishListCard />
    </div>
  )
}

export default YourWishList
