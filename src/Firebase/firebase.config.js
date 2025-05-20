// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl1Ue96hIPaLnxzrFnImduvPChdPz6Y-A",
  authDomain: "asignment-hobbies-app.firebaseapp.com",
  projectId: "asignment-hobbies-app",
  storageBucket: "asignment-hobbies-app.firebasestorage.app",
  messagingSenderId: "165577107939",
  appId: "1:165577107939:web:8087bbded8ffaf84fcd8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);