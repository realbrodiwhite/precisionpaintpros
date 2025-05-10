// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnyvmck2JsgMu87Y2DG6GPZjPW-9KniJI",
  authDomain: "precisionpaintpros-745e1.firebaseapp.com",
  projectId: "precisionpaintpros-745e1",
  storageBucket: "precisionpaintpros-745e1.firebasestorage.app",
  messagingSenderId: "1011617737422",
  appId: "1:1011617737422:web:74fc05c592c57e9638be9f",
  measurementId: "G-MKPRCFY8RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Authentication

// Export them so other parts of your app can use them
export { app, analytics, db, auth };