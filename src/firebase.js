import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDhlFtJvpoksD6gdolDPZES2v0FBrxTN90",
  authDomain: "lino-virtual-shop.firebaseapp.com",
  projectId: "lino-virtual-shop",
  storageBucket: "lino-virtual-shop.appspot.com",
  messagingSenderId: "529425923279",
  appId: "1:529425923279:web:ec6985caf855d932098bba",
  measurementId: "G-NM4V80SCSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export {db};