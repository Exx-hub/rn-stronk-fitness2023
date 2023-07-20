import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcs1z9kBnUau7Osg6eCaUo4VO3nbGmzSk",
  authDomain: "rn-stronk-fitness2023.firebaseapp.com",
  projectId: "rn-stronk-fitness2023",
  storageBucket: "rn-stronk-fitness2023.appspot.com",
  messagingSenderId: "349020114732",
  appId: "1:349020114732:web:21110a1695eea3ad096689",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
