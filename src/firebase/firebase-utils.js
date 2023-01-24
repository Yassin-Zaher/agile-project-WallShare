// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtCQpVJuVbKS-7L8JWLcJX0iHvvC8A8Xg",
  authDomain: "react-getting-statred.firebaseapp.com",
  databaseURL: "https://react-getting-statred-default-rtdb.firebaseio.com",
  projectId: "react-getting-statred",
  storageBucket: "react-getting-statred.appspot.com",
  messagingSenderId: "1039689174433",
  appId: "1:1039689174433:web:0b2347be5f27cc25d80fe0",
  measurementId: "G-RRM3B3TK8Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
