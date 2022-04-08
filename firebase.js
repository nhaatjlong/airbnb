// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNHIJWcm_pBMVoXZHxKHNVe12SnXJyXMg",
  authDomain: "nhatlong-firebase.firebaseapp.com",
  projectId: "nhatlong-firebase",
  storageBucket: "nhatlong-firebase.appspot.com",
  messagingSenderId: "975780893525",
  appId: "1:975780893525:web:fd49b9e5cb5b8da50815dc",
  measurementId: "G-RXJHGSRD8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}
