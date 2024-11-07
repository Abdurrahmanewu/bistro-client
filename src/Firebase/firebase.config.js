// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE - apiKey,
  authDomain: import.meta.VITE - authDomain,
  projectId: import.meta.VITE - projectId,
  storageBucket: import.meta.VITE - storageBucket,
  messagingSenderId: import.meta.VITE - messagingSenderId,
  appId: import.meta.VITE - appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
