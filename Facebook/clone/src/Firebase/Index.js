// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP_GF7F_4o8K9uwziEMZEDlKi2j24KB3M",
  authDomain: "facebook-clone-d0866.firebaseapp.com",
  projectId: "facebook-clone-d0866",
  storageBucket: "facebook-clone-d0866.appspot.com",
  messagingSenderId: "359755684899",
  appId: "1:359755684899:web:e126fd19c99d6039892596",
  measurementId: "G-3CF33P1LKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export default db;