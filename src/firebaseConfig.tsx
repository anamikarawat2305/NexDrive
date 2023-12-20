import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCoPXcwSbQx6bPx6_GHXrDArNLbEluuq90",
  authDomain: "positive-nuance-341108.firebaseapp.com",
  projectId: "positive-nuance-341108",
  storageBucket: "positive-nuance-341108.appspot.com",
  messagingSenderId: "401965394725",
  appId: "1:401965394725:web:562d9bf55188282d3408cc",
  //measurementId: "G-L8B1L6Q1S3"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);