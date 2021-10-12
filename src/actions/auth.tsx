import * as React from 'react';
import '../firebase/firebase';
import firebase from 'firebase/app';
import { signInWithEmailPassword, createUserWithEmailPassword } from '../firebase/firebase';
import { Dispatch } from 'redux';


interface LoginData {
  email: string | undefined,
  password: string
}

export const startLogin = (email: string, password: string) => (dispatch: Dispatch) => {
  return signInWithEmailPassword(email, password).then(
    (data) => {
      dispatch({
        type: 'LOGIN',
        payload: data, //payload
      });

      return Promise.resolve();
    }
  ).catch((error) => 
    dispatch({
      type: 'LOGIN-ERROR',
      payload: error.code,
    })
  );
};

export const createUser = (email: string, password: string) => (dispatch: Dispatch) => {
  return createUserWithEmailPassword(email, password).then(
    (userCredential) => {
      dispatch({
        type: 'REGISTER',
        payload: userCredential,
      });

      return Promise.resolve();
    }
  ).catch((error) => 
    dispatch({
      type: 'REGISTER-ERROR',
      payload: error,
    })
  );
};

// export const startLogin = (email, password) => {
//   console.log('auth')
//   return signInWithEmailPassword(email, password);
// }

export const signOut = () =>  (dispatch: Dispatch) => {
  return firebase.auth().signOut().then(() => {
    dispatch({
      type: 'LOGOUT',
    });

    return Promise.resolve();
  }).catch((error) =>
    Promise.reject(error)
  );
};
