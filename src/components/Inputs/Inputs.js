import React from "react";
import styles from './Inputs.scss';

const Inputs = (props) => (


  <div className="mb-3">
    <input type="email" value={props.emailInput} onChange={props.handleChangeEmail} className="form-control" id='email' placeholder='E-mail' />
    <div className={styles.error}>{props.errorEmail}</div>
    <input type="password" value={props.passwordInput} onChange={props.handleChangePassword} className='form-control' styles={styles.error} id="password" placeholder='Hasło'/>
    <div className={styles.error}>{props.errorPassword}</div>
  </div>
);

// style={{borderColor: props.bdColor}}

export default Inputs;