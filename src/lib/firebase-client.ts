import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "julia-firestack-bugbash.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "julia-firestack-bugbash.appspot.com",
  messagingSenderId: "407295725690",
  appId: "1:407295725690:web:931de7133dd1dc9d972bc3",
  credential: applicationDefault()
});

export const firestore = getFirestore(app);

export const auth = getAuth(app);
