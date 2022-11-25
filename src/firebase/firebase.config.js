// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf5L-Ecgi3-Ik6uVFpJRJzA6nW393QDeA",
  authDomain: "skill-lab-main.firebaseapp.com",
  projectId: "skill-lab-main",
  storageBucket: "skill-lab-main.appspot.com",
  messagingSenderId: "81866659323",
  appId: "1:81866659323:web:de96dcfc5d3e5ad3c6675e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;