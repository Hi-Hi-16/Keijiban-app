// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDObs0CkPDWz5pL0c_acMG89d324nRcoQ4",
  authDomain: "keijiban-c81ed.firebaseapp.com",
  databaseURL: "https://keijiban-c81ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "keijiban-c81ed",
  storageBucket: "keijiban-c81ed.appspot.com",
  messagingSenderId: "871779735202",
  appId: "1:871779735202:web:e8bc3a1874d1e2f1e669fb",
  measurementId: "G-W8VDZG059Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);