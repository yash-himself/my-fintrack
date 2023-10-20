// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaFuR7P4zB2XjnD35r6Jw8iJJI2njgLBk",
  authDomain: "financely-ff010.firebaseapp.com",
  projectId: "financely-ff010",
  storageBucket: "financely-ff010.appspot.com",
  messagingSenderId: "951961390721",
  appId: "1:951961390721:web:fa1300bf0fb5723d1d0780",
  measurementId: "G-6BEK95VC1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };