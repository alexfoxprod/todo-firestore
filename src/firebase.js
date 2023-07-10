// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6EogdK9IRro_qxw_B-ljP_3Lh-2vsg0g",
  authDomain: "react-auth-3ff5d.firebaseapp.com",
  projectId: "react-auth-3ff5d",
  storageBucket: "react-auth-3ff5d.appspot.com",
  messagingSenderId: "644102789629",
  appId: "1:644102789629:web:b33899b24dd3fe677fa194",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
