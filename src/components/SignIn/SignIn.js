import React from "react";
import { signOut } from "../../actions/auth";

const SignIn = (props) => {
  
  
  const onClick = (event) => {
    event.preventDefault();
    signOut(props);
  }

  return (
    <div>
      <h1>Zalogowano</h1>
      <button className="btn btn-outline-dark" onClick={onClick}>
        Powrót
      </button>
    </div>
  )
}
export default SignIn;