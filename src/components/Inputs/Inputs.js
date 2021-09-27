import React from "react";

const Inputs = (props) => (


  <div className="mb-3">
    <input type="email" value={props.emailInput} onChange={props.handleChangeEmail} className="form-control" id="email" aria-describedby="emailHelp" placeholder='E-mail' />
    <input type="password" value={props.passwordInput} onChange={props.handleChangePassword} className="form-control" id="password" placeholder='Hasło'/>
  </div>
);


export default Inputs;