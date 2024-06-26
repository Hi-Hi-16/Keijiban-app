// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v9 or later, import like this:
// import { initializeApp } from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/database";
// If you are using v9 or later, import like this:
// import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// For v9 or later
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

const database = firebase.database();
