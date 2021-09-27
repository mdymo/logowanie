import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/global.css';
import './firebase/firebase';
import firebase from 'firebase/app';


ReactDOM.render(<AppRouter />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in')
  } else {
    console.log('log out')
  }
});