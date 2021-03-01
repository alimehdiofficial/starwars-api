import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvyEfZGlMAfdmm9TsvjRbn6DJ3ufgMLl4",
  authDomain: "starwars-b6af6.firebaseapp.com",
  projectId: "starwars-b6af6",
  storageBucket: "starwars-b6af6.appspot.com",
  messagingSenderId: "62019009571",
  appId: "1:62019009571:web:672a7a2c01376875f6c596",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;
