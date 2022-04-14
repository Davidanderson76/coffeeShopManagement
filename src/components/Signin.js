import React from "react";
import { signInWithGoogle } from "../Firebase";

function Signin() {
  return (
    <div>
      <br></br>
      <br></br>
      <img
        className="profilePic"
        alt="google user display"
        src={localStorage.getItem("profilePic")}></img>
      <h1>Welcome {localStorage.getItem("name")}!</h1>
      <h5>{localStorage.getItem("email")}</h5>

      <button
        type="button"
        class="login-with-google-btn button"
        onClick={signInWithGoogle}>
        Sign In
      </button>

      <button type="button" class="login-with-google-btn offButton" disabled>
        Sign Out
      </button>
    </div>
  );
}

export default Signin;
