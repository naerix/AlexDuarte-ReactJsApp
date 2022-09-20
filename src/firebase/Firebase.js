// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwJeodygn6PzI_evydsyKBCB5My274cHE",
  authDomain: "weirdstore-coder.firebaseapp.com",
  projectId: "weirdstore-coder",
  storageBucket: "weirdstore-coder.appspot.com",
  messagingSenderId: "679649768116",
  appId: "1:679649768116:web:d55765e5d7d262f3cadde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)