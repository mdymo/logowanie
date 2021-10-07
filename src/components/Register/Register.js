import React, { useState, useEffect } from 'react';
import InputsRegister from '../Inputs/InputsRegister';
import styles from './Register.scss';
import validator from 'validator';
import 'validator/lib/isEmail';
import { createUser } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';






const Register = (props) => {

  const [email, setEmail] = useState('');
  const [emailRepeat, setEmailRepeat] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorEmailRepeat, setErrorEmailRepeat] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const createdUser = useSelector((state) => state.loginReducer.newUser);
  const errorLabel = useSelector((state) => state.loginReducer.errorLabel);
  const dispatch = useDispatch();


  useEffect(() => {
    if(createdUser != null){
      // eslint-disable-next-line react/prop-types
      props.history.push('/');
      window.location.reload();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdUser]);

  const onClick = (event) => {
    event.preventDefault();
    dispatch(createUser(email, password));
  };

  const handleChangeEmail = (event) => {
    event.persist();
    if(event && event.target != null) {
      const email = event.target.value;
      setEmail(email);
    }
    if(event.target.value != 0 && !validator.isEmail(event.target.value)){
      console.log('email nie jest ok');
      event.target.style.borderColor = 'red';
      const errorEmail = 'Nieprawidłowy format E-mail';
      setErrorEmail(errorEmail);
      // this.setState(() => ({
      //   errorEmail: 'Niepoprawny format E-mail',
      // }));
    } else {
      console.log('email jest ok');
      event.target.style.borderColor = '#ced4da';
      const errorEmail = '';
      setErrorEmail(errorEmail);
      // this.setState(() => ({
      //   errorEmail: '',
      // }));
    }
  };

  const handleChangeEmailRepeat = (event) => {
    event.persist();
    if(event && event.target != null) {
      const emailRepeat = event.target.value;
      setEmailRepeat(emailRepeat);
    }
    if(event.target.value != 0 && event.target.value != email){
      event.target.style.borderColor = 'red';
      const errorEmailRepeat = 'Podany E-mail jest różny';
      setErrorEmailRepeat(errorEmailRepeat);
    } else {
      event.target.style.borderColor = '#ced4da';
      const errorEmailRepeat = '';
      setErrorEmailRepeat(errorEmailRepeat);
    }
  };

  const handleChangePassword = (event) => {
    event.persist();
    if(event && event.target != null) {
      const password = event.target.value;
      setPassword(password);
    }

    const passwordRegExp = new RegExp('^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    const test = passwordRegExp.test(event.target.value);
    // console.log('test', test)
    if(event.target.value != 0 && !test){
      // console.log('haslo nie jest ok')
      event.target.style.borderColor = 'red';
      const errorPassword = 'Hasło musi zawierać 8 znaków, w tym jedną cyfre oraz znak specjalny';
      setErrorPassword(errorPassword);
    } else {
      // console.log('haslo jest ok')
      event.target.style.borderColor = '#ced4da';
      const errorPassword = '';
      setErrorPassword(errorPassword);
    }
  };

  return (
    <div className={styles.register}>
      <header className={styles.header}>
        <h1>Rejestracja</h1>
      </header>
      <form>
        <InputsRegister 
          handleChangeEmail={handleChangeEmail}
          errorEmail={errorEmail}
          errorEmailRepeat={errorEmailRepeat}
          emailInput={email}
          emailRepeat={emailRepeat}
          handleChangeEmailRepeat={handleChangeEmailRepeat}
          handleChangePassword={handleChangePassword}
          passwordInput={password}
          errorPassword={errorPassword}
        />
        <button type='submit' className="btn btn-outline-dark" onClick={onClick}>
          Zarejestruj
        </button>
        <div className={styles.text}>
          {errorLabel}
        </div>
      </form>
    </div>
  );
};

export default Register;