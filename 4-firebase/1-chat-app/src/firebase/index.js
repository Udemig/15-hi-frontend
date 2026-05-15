// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//! auth servisini import et
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//! firestore servisini import et
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! auth servisini referansını oluştur
export const auth = getAuth(app);

//! google sağlayıcısının kurulumunu yap
export const provider = new GoogleAuthProvider();

//! firestore servisinin referansını oluştur
export const db = getFirestore(app);
