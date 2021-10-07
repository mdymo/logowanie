import React from 'react';
import Form from '../Form/Form';
import 'firebase/auth';
import validator from 'validator';
import 'validator/lib/isEmail';


class Log extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      // bdColor: '',
      emailInputValue: '',
      passwordInputValue: '',
      errorData: '',
      errorEmail: '',
      errorPassword: '',
    };
  }

  handleChangeEmail(event) {
    event.persist();
    if(event && event.target != null) {
    
      this.setState(() => ({
        emailInputValue: event.target.value,
      }));
    }
    
    if(event.target.value != 0 && !validator.isEmail(event.target.value)){
      console.log('email nie jest ok');
      event.target.style.borderColor = 'red';
      this.setState(() => ({
        errorEmail: 'Niepoprawny format E-mail',
      }));
    } else {
      console.log('email jest ok');
      event.target.style.borderColor = '#ced4da';
      this.setState(() => ({
        errorEmail: '',
      }));
    }
  }

  // if(!validator.isEmail(event.target.value)){
  //   console.log('email nie jest ok')
  //   this.setState(() => ({
  //     bdColor: 'red'
  //   }))
  // } else {
  //   console.log('email jest ok')
  //   this.setState(() => ({
  //     bdColor: '#ced4da'
  //   }))
  // } 

  handleChangePassword(event) {
    event.persist();
    if(event && event.target != null) {
    
      this.setState(() => ({
        passwordInputValue: event.target.value,
      }));
    }

    const passwordRegExp = new RegExp('(?=.*[0-9])');
    const test = passwordRegExp.test(event.target.value);
    // console.log('test', test)
    if(event.target.value != 0 && !test){
      // console.log('haslo nie jest ok')
      event.target.style.borderColor = 'red';
      this.setState(() => ({
        errorPassword: 'Niepoprawny format hasła',
      }));
    } else {
      // console.log('haslo jest ok')
      event.target.style.borderColor = '#ced4da',
      this.setState(() => ({
        errorPassword: '',
      }));
    }
  }

  validate() {
    this.setState(() => ({
      errorData: 'Dane są nieprawidłowe',
    }));
  }


  render(){
    return (
      <div>
        <Form 
          emailInputValue={this.state.emailInputValue}
          passwordInputValue={this.state.passwordInputValue}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePassword={this.handleChangePassword}
          handleOnSubmit={this.handleOnSubmit}
          validate={this.validate}
          errorData={this.state.errorData}
          errorEmail={this.state.errorEmail}
          errorPassword={this.state.errorPassword}
          // bdColor={this.state.bdColor}
          {...this.props}
        />
      </div>
    );
  }
}

export default Log;