import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx2aAzWoLxZbIAtJuVr-I1f2oiWwCVZJU",
  authDomain: "amantiwari-movie.firebaseapp.com",
  projectId: "amantiwari-movie",
  storageBucket: "amantiwari-movie.firebasestorage.app",
  messagingSenderId: "960228805957",
  appId: "1:960228805957:web:fded66981d11afb5f5022c",
  measurementId: "G-7NMHK4BLKF"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
