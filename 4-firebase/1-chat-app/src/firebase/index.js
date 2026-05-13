// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//! auth servisini import et
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//! firestore servisini import et
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCkPgT1ns8iu9-e_uIecEpF7sQpRon0YU",
  authDomain: "chat-70d76.firebaseapp.com",
  projectId: "chat-70d76",
  storageBucket: "chat-70d76.firebasestorage.app",
  messagingSenderId: "975287516932",
  appId: "1:975287516932:web:531411dc1b2f2b706a5a51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! auth servisini referansını oluştur
export const auth = getAuth(app);

//! google sağlayıcısının kurulumunu yap
export const provider = new GoogleAuthProvider();

//! firestore servisinin referansını oluştur
export const db = getFirestore(app);
