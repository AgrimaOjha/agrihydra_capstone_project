// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzlHMDd09jdcyFbOS2yqMg7C85Xo7PidY",
  authDomain: "agrihydra-82317.firebaseapp.com",
  projectId: "agrihydra-82317",
  storageBucket: "agrihydra-82317.firebasestorage.app",
  messagingSenderId: "274595933097",
  appId: "1:274595933097:web:b5708d0fd62499fbd0f2b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);