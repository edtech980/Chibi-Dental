// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRDyh6B4VKHxMVmapaG2a6v8sG-svLqK8",
  authDomain: "doctor-chibi.firebaseapp.com",
  projectId: "doctor-chibi",
  storageBucket: "doctor-chibi.appspot.com",
  messagingSenderId: "1020577096618",
  appId: "1:1020577096618:web:71af35bae4b969d72681d3",
  measurementId: "G-7ET7MVWKW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);