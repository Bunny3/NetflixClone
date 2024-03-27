// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTw3LT2xyG19tA58y1xw1JxHVX_3f6TZE",
  authDomain: "netflixgpt2-9bcb7.firebaseapp.com",
  projectId: "netflixgpt2-9bcb7",
  storageBucket: "netflixgpt2-9bcb7.appspot.com",
  messagingSenderId: "394357116250",
  appId: "1:394357116250:web:8c9d83bfa486babc1e7763",
  measurementId: "G-T8G8B44N6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();