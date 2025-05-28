// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJyQaBKtKS4fX9jOwyNQ5DRZDp4Lsksk",
  authDomain: "bookgenrator1-5a324.firebaseapp.com",
  projectId: "bookgenrator1-5a324",
  storageBucket: "bookgenrator1-5a324.firebasestorage.app",
  messagingSenderId: "654316559665",
  appId: "1:654316559665:web:7410d732849394524e2410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)