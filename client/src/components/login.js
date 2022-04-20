import React from 'react'

function login() {
  return (
    <div>
      <form className="login" onSubmit={console.log()} >
        <input className="email" type="text" id="email_id" placeholder="Email Address" value="" onChange={console.log()}/>
        <input className="password" type="password" id="password" placeholder="Password" value="" onChange={console.log()} />
        <input className="confirm_password" type="text" id="confirm_password" placeholder="Confirm Password" value=""onChange={console.log()} />
        <button className="sign_up_btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default login