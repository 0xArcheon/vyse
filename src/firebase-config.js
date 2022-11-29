// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9SOq11pTBoEzOFtCLkGTwXupxBeM6Oz4",
    authDomain: "vyse-a0d5d.firebaseapp.com",
    projectId: "vyse-a0d5d",
    storageBucket: "vyse-a0d5d.appspot.com",
    messagingSenderId: "801288542849",
    appId: "1:801288542849:web:1b12d42dd7dea8ce0c8b80",
    measurementId: "G-658CD9JTEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);