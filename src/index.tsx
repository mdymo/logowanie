import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/global.scss';
import './firebase/firebase';
import firebase from 'firebase/app';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';


ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});