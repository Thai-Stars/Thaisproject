import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJyQaBKtKS4fX9jOwyNQ5DRZDp4Lsksk",
  authDomain: "bookgenrator1-5a324.firebaseapp.com",
  projectId: "bookgenrator1-5a324",
  storageBucket: "bookgenrator1-5a324.firebasestorage.app",
  messagingSenderId: "654316559665",
  appId: "1:654316559665:web:7410d732849394524e2410",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
