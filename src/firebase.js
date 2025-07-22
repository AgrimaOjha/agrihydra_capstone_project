
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAzlHMDd09jdcyFbOS2yqMg7C85Xo7PidY",
  authDomain: "agrihydra-82317.firebaseapp.com",
  projectId: "agrihydra-82317",
  storageBucket: "agrihydra-82317.firebasestorage.app",
  messagingSenderId: "274595933097",
  appId: "1:274595933097:web:b5708d0fd62499fbd0f2b8"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
