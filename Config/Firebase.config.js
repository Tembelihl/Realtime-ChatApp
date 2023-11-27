import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBuJdD0LsnPLbX5VMHhMINGYfSPdF2ZFQI",
  authDomain: "real-time-chatapp-fd6ca.firebaseapp.com",
  projectId: "real-time-chatapp-fd6ca",
  storageBucket: "real-time-chatapp-fd6ca.appspot.com",
  messagingSenderId: "521778241068",
  appId: "1:521778241068:web:324eeac6b7502af01d3b89"
};

const app = getApps.lenhgt > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB};
