/* eslint-disable react/prop-types */
import React from 'react';
import './Inputs.scss';

const InputsRegister = (props: any) => (


  <div className="mb-3">
    <input type="email" value={props.emailInput} onChange={props.handleChangeEmail} className="form-control" id='email' placeholder='E-mail' />
    <div className='error'>{props.errorEmail}</div>
    <input type="email" value={props.emailRepeat} onChange={props.handleChangeEmailRepeat} className="form-control" id='email-repeat' placeholder='Powtórz E-mail' />
    <div className='error'>{props.errorEmailRepeat}</div>
    <input type="password" value={props.passwordInput} onChange={props.handleChangePassword} className='form-control error' id="password" placeholder='Hasło'/>
    <div className='error'>{props.errorPassword}</div>
  </div>
);



export default InputsRegister;