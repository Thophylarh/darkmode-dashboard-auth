import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,

  authDomain: "reactauth-learn-project.firebaseapp.com",

  projectId: "reactauth-learn-project",

  storageBucket: "reactauth-learn-project.appspot.com",

  messagingSenderId: "373078127641",

  appId: "1:373078127641:web:d580567461d1efb977e688",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
