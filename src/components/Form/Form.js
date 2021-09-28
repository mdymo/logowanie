import React from "react";
import Inputs from "../Inputs/Inputs";
import { startLogin } from '../../actions/auth';
import styles from './Form.scss'

const Form = (props) => {
  let emailInput = props.emailInputValue;
  let passwordInput = props.passwordInputValue;
  
  const onClick = (event) => {
    event.preventDefault();
    startLogin(emailInput, passwordInput).then(() => {
      props.history.push('/sign')
    }).catch((x) => {
      console.log('problem', x)
      props.validate();
    })
  } 

  return (
    <form className='login'>
      <Inputs 
        emailInput={props.emailInputValue} 
        passwordInput={props.passwordInputValue} 
        handleChangeEmail={props.handleChangeEmail}
        handleChangePassword={props.handleChangePassword}
        errorPassword={props.errorPassword}
        errorEmail={props.errorEmail}
        // bdColor={props.bdColor}
      />
      <button type='submit' className="btn btn-outline-dark" onClick={onClick}>
        Zaloguj
      </button>
      <div className={styles.text}>
        {props.errorData}
      </div>
    </form>
  );
};

// const mapDispatchToProps = (disptach) => ({
//   startLogin: () =>  disptach(startLogin())
// });

export default Form;