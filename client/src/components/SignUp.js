import React, { useState, useEffect } from 'react';

function SignUp() {

  const [signUp, setSignUp] = useState([])
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
    fetch("/signups" , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setSignUp)
    })
    .then((res)=> res.json())
    .then((data)=> setSignUp(data))
  }, [])

    function handleSubmit(e) {
      e.preventDefault()
      let onSubmitEmail
      onSubmitEmail(e.currentTarget.elements.email)

    if (firstName.length > 0) {
      const formData = {firstName:firstName, lastName:lastName, phoneNumber:phoneNumber, email:email};
      const dataArray =[...signUp, formData];
      setSignUp(dataArray);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      } else {
        setErrors(["Required info"]);
      }}

    function handleEmail(e) {
      setEmail(e.target.value)
    }

    function handleFirstName(e) {
      setFirstName(e.target.value)
    }

    function handleLastName(e) {
      setLastName(e.target.value)
    }

    function handlePhoneNumber(e) {
      setPhoneNumber(e.target.value)
    }


    // const listOfSubmissions = signUp.map((data, index) => {
    //   return (
    //     <div key={index}>
    //       {data.firstName} {data.lastName} {data.phoneNumber} {data.email}
    //     </div>
    //     )
    //   });

  return (
    <div class="form-group has-success">
      <form className="sign-up" onSubmit={handleSubmit} >
        <input className="email" type="text" id="email_id" placeholder="Email Address" value={email} onChange={handleEmail}/>
        <input className="first_name" type="text" id="first_name" placeholder="First Name" value={firstName} onChange={handleFirstName} />
        <input className="last_name" type="text" id="last_name" placeholder="Last Name" value={lastName} onChange={handleLastName} />
        <input className="phone_number" type="text" id="phone" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumber} />
        <button className="sign_up_btn" type="submit">Submit</button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => (
          <p key={index}>{error}</p>
        ))
        :null
    }
    {/* {listOfSubmissions} */}
    </div>
  )
}

export default SignUp
