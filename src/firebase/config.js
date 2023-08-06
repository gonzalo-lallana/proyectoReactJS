// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDB5snj14tUMSHQ_Bx01lLnqLhaoL6DK5g",
    authDomain: "crazy4boxing.firebaseapp.com",
    projectId: "crazy4boxing",
    storageBucket: "crazy4boxing.appspot.com",
    messagingSenderId: "325840679122",
    appId: "1:325840679122:web:5b12b6a6f443e6d7237d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
export const auth = getAuth(app)