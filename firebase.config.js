// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCebKfut7XzxXkGExpmPHvcOEU5NsjKXnE",
  authDomain: "goodspacedesign-ccc55.firebaseapp.com",
  projectId: "goodspacedesign-ccc55",
  storageBucket: "goodspacedesign-ccc55.appspot.com",
  messagingSenderId: "215760782207",
  appId: "1:215760782207:web:17c2030ee0113a479e504a",
  measurementId: "G-NGSST9XSN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);