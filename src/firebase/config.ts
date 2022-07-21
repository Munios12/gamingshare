// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVUbn-C3rNjp8I0rsG9DFXV1QZ2BkHqs",
  authDomain: "gaming-share-9a5fa.firebaseapp.com",
  projectId: "gaming-share-9a5fa",
  storageBucket: "gaming-share-9a5fa.appspot.com",
  messagingSenderId: "963161163341",
  appId: "1:963161163341:web:28e55312e5c42b18a73e04",
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
