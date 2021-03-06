import React from 'react';
import OnlineStore from './OnlineStore';
import Event from './Event';
import Nav from './Nav';
// import Invite from './Invite';
import SignUp from './SignUp.js';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  
  const signUpPage = () => {
      navigate("/signup")
  }

  return (

    <div>
      <h2 id="Secret-Santa">Secret Santa</h2>
      <img id="Secret-Santa-image" src="https://woodsboroworld.com/wp-content/uploads/2021/03/secret-santa-claus-invitation-background-standing-blank-sign-showing-big-blank-sign_209425-431.jpg" alt="Secret Santa" />
      <button 
        onClick={signUpPage}>Sign Up
      </button>
      {/* <Nav /> */}
      
      {/* <OnlineStore />
      <Event /> */}
    
      {/* <SignUp /> */}
      {/* <Invite /> */}
    </div>
  )
}

export default Home
