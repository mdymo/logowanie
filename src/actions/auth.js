import '../firebase/firebase';
import firebase from 'firebase/app';
import { signInWithEmailPassword } from '../firebase/firebase';



export const startLogin = (email, password) => (dispatch) => {
  return signInWithEmailPassword(email, password).then(
    (data) => {
      dispatch({
        type: 'LOGIN',
        user: data //payload
      });

      return Promise.resolve();
    }
  ).catch((error) => 
     Promise.reject(error)
  )
}

// export const startLogin = (email, password) => {
//   console.log('auth')
//   return signInWithEmailPassword(email, password);
// }

export const signOut = () =>  (dispatch) => {
  return firebase.auth().signOut().then(() => {
    dispatch({
      type: 'LOGOUT'
    })

    return Promise.resolve();
  }).catch((error) =>
    Promise.reject(error)
  );
}

