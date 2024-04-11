// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAstqu7YQqRcQ6OQ3fIQtWFB9nvY5VqnY4",
  authDomain: "movies-app-f9b94.firebaseapp.com",
  projectId: "movies-app-f9b94",
  storageBucket: "movies-app-f9b94.appspot.com",
  messagingSenderId: "19132045934",
  appId: "1:19132045934:web:4160562067e47a5a59247f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();