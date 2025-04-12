// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf6Sx9yA91Uf0in7Zba2CWqAMW0QveZH4",
  
  authDomain: "projectmimir-83f90.firebaseapp.com",
  projectId: "projectmimir-83f90",
  storageBucket: "projectmimir-83f90.firebasestorage.app",
  messagingSenderId: "548958245503",
  appId: "1:548958245503:web:69b943439a137f7ccc254a",
  measurementId: "G-M80GMG34ZG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export {app, auth, provider};