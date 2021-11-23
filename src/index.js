// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);