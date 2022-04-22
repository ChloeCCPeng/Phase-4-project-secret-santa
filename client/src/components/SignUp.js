import React, { useState } from 'react';
import User from './User';



const userAPI = "/signups"

function SignUp() {

  const [signUp, setSignUp] = useState([])

  
    fetch(userAPI , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setSignUp)
    })
    .then((res)=> res.json())
    .then((data)=> setSignUp(data))

  return (
    <div class="form-group has-success">
      {/* <User /> */}
      <form className="sign-up" onSubmit={console.log()} >
        <input className="email" type="text" id="email_id" placeholder="Email Address" value="" onChange={signup.email}/>
        <input className="first_name" type="text" id="first_name" placeholder="First Name" value="" onChange={signup.firstName} />
        <input className="last_name" type="text" id="last_name" placeholder="Last Name" value="" onChange={signup.lastName} />
        <input className="phone" type="text" id="phone" placeholder="Phone Number" value="" onChange={signup.phone} />
        <input className="password" type="password" id="password" placeholder="Password" value="" onChange={signup.password} />
        <button className="sign_up_btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
