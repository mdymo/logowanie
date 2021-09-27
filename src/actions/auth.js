import '../firebase/firebase';
import firebase from 'firebase/app';
import { signInWithEmailPassword } from '../firebase/firebase';

export const startLogin = (email, password) => {
  console.log('auth')
  return signInWithEmailPassword(email, password);
}

export const signOut = (props) => {
  firebase.auth().signOut().then(() =>
    props.history.push('/')
  )
}

