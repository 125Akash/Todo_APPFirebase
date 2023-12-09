import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVrtKn4JQik4x_ev3HitZcrx4kjHPjyAM",
  authDomain: "aiscribe-a990a.firebaseapp.com",
  projectId: "aiscribe-a990a",
  storageBucket: "aiscribe-a990a.appspot.com",
  messagingSenderId: "1069088913469",
  appId: "1:1069088913469:web:a66a99bc631c42c6b31254"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
