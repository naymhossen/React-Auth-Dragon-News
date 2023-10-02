// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNfIpCYrcMaDuF9cvfwvVCwmJwh6rA_D0",
  authDomain: "react-dragon-news-auth-2bd72.firebaseapp.com",
  projectId: "react-dragon-news-auth-2bd72",
  storageBucket: "react-dragon-news-auth-2bd72.appspot.com",
  messagingSenderId: "487249879942",
  appId: "1:487249879942:web:8f94bb433bcf3d44948207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);