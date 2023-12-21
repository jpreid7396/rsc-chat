import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyD3xPI4TkU7SkIg0w1iuTZ5Dnk9rj6GC5k",
  authDomain: "julia-firestack-bugbash.firebaseapp.com",
  projectId: "julia-firestack-bugbash",
  storageBucket: "julia-firestack-bugbash.appspot.com",
  messagingSenderId: "407295725690",
  appId: "1:407295725690:web:931de7133dd1dc9d972bc3"
});

export const firestore = getFirestore(app);

export const auth = getAuth(app);
