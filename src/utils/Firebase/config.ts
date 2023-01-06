import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBSg_2MfZRBXKfR7B_neLPZcgHnM7nc3eM",
  authDomain: "react-bootcamp-ee891.firebaseapp.com",
  projectId: "react-bootcamp-ee891",
  storageBucket: "react-bootcamp-ee891.appspot.com",
  messagingSenderId: "420018422353",
  appId: "1:420018422353:web:95523b9ca8d690c313ee70"
};

const app = initializeApp(firebaseConfig);

export const fireAuth = getAuth(app)
export const storage = getStorage(app)