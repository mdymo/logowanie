import '../firebase/firebase';
import firebase from 'firebase/app';
import { signInWithEmailPassword, createUserWithEmailPassword } from '../firebase/firebase';



export const startLogin = (email, password) => (dispatch) => {
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

export const createUser = (email, password) => (dispatch) => {
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

export const signOut = () =>  (dispatch) => {
  return firebase.auth().signOut().then(() => {
    dispatch({
      type: 'LOGOUT',
    });

    return Promise.resolve();
  }).catch((error) =>
    Promise.reject(error)
  );
};
