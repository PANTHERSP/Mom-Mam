// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJCAH5B2T2ue9i9iioB-TkSkfUwJFNEmU",
  authDomain: "mommam-4a17d.firebaseapp.com",
  projectId: "mommam-4a17d",
  storageBucket: "mommam-4a17d.appspot.com",
  messagingSenderId: "669587694787",
  appId: "1:669587694787:web:696be839e5355618702e76",
  measurementId: "G-68WE5MPKP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
