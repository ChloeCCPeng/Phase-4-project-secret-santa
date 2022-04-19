import React from 'react';
import User from './User';

function SignUp() {
  return (
    <div>
      <User />
      <form className="sign-up" onSubmit={console.log()} >
        <input className="email" type="text" id="email_id" placeholder="Email Address" value="" onChange={console.log()}/>
        <input className="first_name" type="text" id="first_name" placeholder="First Name" value="" onChange={console.log()} />
        <input className="last_name" type="text" id="last_name" placeholder="Last Name" value="" onChange={console.log()} />
        <input className="phone" type="text" id="phone" placeholder="Phone Number" value="" onChange={console.log()} />
        <input className="password" type="password" id="password" placeholder="Password" value="" onChange={console.log()} />
        <input className="confirm_password" type="text" id="confirm_password" placeholder="Confirm Password" value=""onChange={console.log()} />
        <button className="sign_up_btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
