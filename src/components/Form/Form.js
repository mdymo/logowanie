/* eslint-disable react/prop-types */
import React from 'react';
import InputsLog from '../Inputs/InputsLog';
import { startLogin } from '../../actions/auth';
import styles from './Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



const Form = (props) => {
  let emailInput = props.emailInputValue;
  let passwordInput = props.passwordInputValue;
  

  const logedInUser = useSelector((state) => state.loginReducer.user);
  const errorLabel = useSelector((state) => state.loginReducer.errorLabel);
  const dispatch = useDispatch();

  useEffect(() => {
    if(logedInUser != null){
      props.history.push('/sign');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logedInUser]);
  

  const onClick = (event) => {
    event.preventDefault();
    dispatch(startLogin(emailInput, passwordInput));
    // .then(() => {
    //   props.history.push('/sign')
    // }).catch((x) => {
    //   console.log('problem', x)
    //   props.validate();
    // })
  };

  const registratePage = (event) => {
    event.preventDefault();
    props.history.push('/register');
    
  };

  
  return (
    <form className='login'>
      <InputsLog
        emailInput={props.emailInputValue} 
        passwordInput={props.passwordInputValue} 
        handleChangeEmail={props.handleChangeEmail}
        handleChangePassword={props.handleChangePassword}
        errorPassword={props.errorPassword}
        errorEmail={props.errorEmail}
        bdColor={props.bdColor}
      />
      <button type='submit' className="btn btn-outline-dark" onClick={onClick}>
        Zaloguj
      </button>
      <div className={styles.text}>
        {errorLabel}
      </div>
      <button type='submit' className="btn btn-outline-dark" onClick={registratePage}>
        Rejestracja
      </button>
    </form>
  );
};



export default Form;

// const mapStateToProps = state => {   
//   console.log('state', state)
//   return {
//     logedInUser: state.loginReducer.user
//   };
// };

// const mapDispatchToProps = (disptach) => ({
//   login: (email, password) =>  disptach(startLogin(email, password))
// });

    
// export default connect(mapStateToProps, mapDispatchToProps)(Form)