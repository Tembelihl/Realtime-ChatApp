// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/Auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAADN7lvIJ-Ui1mflIItzBskoq9TbKOIWs",
  authDomain: "realtime-chatapp-35e02.firebaseapp.com",
  projectId: "realtime-chatapp-35e02",
  storageBucket: "realtime-chatapp-35e02.appspot.com",
  messagingSenderId: "203894626253",
  appId: "1:203894626253:web:6a56fdb369328773a39684",
  measurementId: "G-TGRM4X2JFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)