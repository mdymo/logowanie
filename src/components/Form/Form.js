import React from "react";
import { Redirect } from "react-router";
import Inputs from "../Inputs/Inputs";
import { startLogin } from '../../actions/auth';
import firebase from 'firebase/app';
import 'firebase/auth'

const Form = (props) => {
  let emailInput = props.emailInputValue;
  let passwordInput = props.passwordInputValue;
  
  const onClick = (event) => {
    event.preventDefault();
    startLogin(emailInput, passwordInput).then(() => {
      props.history.push('/sign')
    }).catch((x) => {
      console.log('problem', x)
    })
  } 

  return (
    <form className='login' >
      <Inputs 
        emailInput={props.emailInputValue} 
        passwordInput={props.passwordInputValue} 
        handleChangeEmail={props.handleChangeEmail}
        handleChangePassword={props.handleChangePassword}
      />
      <button type='submit' className="btn btn-outline-dark" onClick={onClick}>
        Zaloguj
      </button>
    </form>
  );
};

// const mapDispatchToProps = (disptach) => ({
//   startLogin: () =>  disptach(startLogin())
// });

export default Form;