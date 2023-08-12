import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBai-Y9qYeo7W-YyRCEBdEIvFN2qTYW5-0",
  authDomain: "test-bloc-pattern.firebaseapp.com",
  projectId: "test-bloc-pattern",
  storageBucket: "test-bloc-pattern.appspot.com",
  messagingSenderId: "831677483157",
  appId: "1:831677483157:web:b6e898beb4c17034bd339c",
  measurementId: "G-ZF3EW26YHP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
