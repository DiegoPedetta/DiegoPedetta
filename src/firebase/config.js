// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJbPMAQG1S4ppm-CDYcw14aiR5lX9nXEY",
  authDomain: "tec-commerce.firebaseapp.com",
  projectId: "tec-commerce",
  storageBucket: "tec-commerce.appspot.com",
  messagingSenderId: "414343479591",
  appId: "1:414343479591:web:2c16efc87739368da52902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);