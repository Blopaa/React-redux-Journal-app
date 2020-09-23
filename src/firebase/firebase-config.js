import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0C4oT6bmIqnYBBKzz2F7LLZwfUxvtVcw",
    authDomain: "react-app-f447f.firebaseapp.com",
    databaseURL: "https://react-app-f447f.firebaseio.com",
    projectId: "react-app-f447f",
    storageBucket: "react-app-f447f.appspot.com",
    messagingSenderId: "1045937421292",
    appId: "1:1045937421292:web:3600a0f904f2a4ba755ec9"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}