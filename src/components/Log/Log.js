import React from "react";
import './Log.css';
import Form from '../Form/Form';

class Log extends React.Component {
  constructor(props){
    super(props);
    this.showSignIn = this.showSignIn.bind(this);
    this.state = {
      showWindow: false,
    }
  }

  showSignIn(e){
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    if(emailInput && emailInput.value && passwordInput && passwordInput.value){
      this.setState(() => ({ showWindow: true }))
    } else {
      this.setState(() => ({ showWindow: false }))
      alert('niepoprawne dane')
    }
  }


  render(){
    return (
      <Form showSignIn={this.showSignIn} showWindow={this.state.showWindow}/>
    );
  }
}

export default Log;