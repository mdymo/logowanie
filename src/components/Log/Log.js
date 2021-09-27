import React from "react";
import './Log.css';
import Form from '../Form/Form';
import firebase from 'firebase/app';
import 'firebase/auth'


class Log extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      showWindow: false,
      emailInputValue: '',
      passwordInputValue: ''
    }
  }

  handleChangeEmail(event) {
    event.persist()
    if(event && event.target != null) {
    
      this.setState(() => ({
        emailInputValue: event.target.value,
      }))
    }
  }

  handleChangePassword(event) {
    event.persist()
    if(event && event.target != null) {
    
      this.setState(() => ({
        passwordInputValue: event.target.value,
      }))
    }
  }

  render(){
    return (
      <Form 
        emailInputValue={this.state.emailInputValue}
        passwordInputValue={this.state.passwordInputValue}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
        {...this.props}
      />
    );
  }
}

export default Log;