// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY ,
  authDomain: "estatemernstack.firebaseapp.com",
  projectId: "estatemernstack",
  storageBucket: "estatemernstack.appspot.com",
  messagingSenderId: "78947595970",
  appId: "1:78947595970:web:d40324e44156e5fb732d5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);