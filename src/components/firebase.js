// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrrNPftZE8uHruPWJbqgD8U5iXhPHsDGQ",
  authDomain: "buybusy-75913.firebaseapp.com",
  projectId: "buybusy-75913",
  storageBucket: "buybusy-75913.appspot.com",
  messagingSenderId: "833030627070",
  appId: "1:833030627070:web:5cc9334f34121e35fdcfaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);