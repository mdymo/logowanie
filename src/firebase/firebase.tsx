import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBFkUVaLiq12oqYzmm3X8KFSDsp9LjVhnU',
  authDomain: 'logowanie-6684e.firebaseapp.com',
  databaseURL: 'https://logowanie-6684e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'logowanie-6684e',
  storageBucket: 'logowanie-6684e.appspot.com',
  messagingSenderId: '688128557007',
  appId: '1:688128557007:web:efca6faa03c5f815acdcba',
  measurementId: 'G-VE5QR0KG8H',
};

firebase.initializeApp(firebaseConfig);
console.log('app init');


export function signInWithEmailPassword(email: string, password: string) {
  console.log('login start', email, password);
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      return Promise.resolve(userCredential);
    })
    .catch((error) => {
      console.log('error', error);
      // alert('błędne dane');
      return Promise.reject(error);
    });
}

export function createUserWithEmailPassword(email: string, password: string) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return Promise.resolve(userCredential);
    })

    .catch((error) => {
      return Promise.reject(error);
    });
}

