// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Add SDKs under above to import Firebase functionalities we need to use
// Link: https://firebase.google.com/docs/web/setup#available-libraries

// Food Locker app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oLVnl-tJNTiKmYz2dl6q-htaAnD3qyY",
  authDomain: "alpha-beta-food-locker.firebaseapp.com",
  databaseURL: "https://alpha-beta-food-locker-default-rtdb.firebaseio.com",
  projectId: "alpha-beta-food-locker",
  storageBucket: "alpha-beta-food-locker.appspot.com",
  messagingSenderId: "557847595",
  appId: "1:557847595:web:839ce289e5921c1d01866e",
  measurementId: "G-6X3P5EQ2M7"
};

// Initializes Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
