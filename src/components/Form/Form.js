import React from "react";
import { Redirect } from "react-router";
import Email from "../Email/Email";
import Password from "../Password/Password";

const Form = (props) => (
  <form className='login' onSubmit={props.showSignIn}>
    <Email />
    <Password />
    <button type="submit" className="btn btn-outline-dark" >
      Zaloguj
    </button>
    {props.showWindow && <Redirect to="/sign" />}
  </form>
);

export default Form;