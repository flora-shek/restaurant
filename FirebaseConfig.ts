// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9nu43BPceEJhyjHZe0bHaHD2KQYDIGH0",
  authDomain: "restaurant-e2846.firebaseapp.com",
  projectId: "restaurant-e2846",
  storageBucket: "restaurant-e2846.firebasestorage.app",
  messagingSenderId: "658593536710",
  appId: "1:658593536710:web:d1ac9f57ff1e4d1ed295c7",
  measurementId: "G-DH037XJP3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);

