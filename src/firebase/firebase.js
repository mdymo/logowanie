import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFkUVaLiq12oqYzmm3X8KFSDsp9LjVhnU",
  authDomain: "logowanie-6684e.firebaseapp.com",
  databaseURL: "https://logowanie-6684e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "logowanie-6684e",
  storageBucket: "logowanie-6684e.appspot.com",
  messagingSenderId: "688128557007",
  appId: "1:688128557007:web:efca6faa03c5f815acdcba",
  measurementId: "G-VE5QR0KG8H"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


database.ref().set({
  name: 'michal dymek'
});


