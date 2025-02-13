import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import {
  getDatabase,  
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBH9UhJKtp8zZu-Th_D93-dkXnFLDFnjVM",
    authDomain: "og-application-9afab.firebaseapp.com",
    projectId: "og-application-9afab",
    storageBucket: "og-application-9afab.firebasestorage.app",
    messagingSenderId: "526496738648",
    appId: "1:526496738648:web:107a07d944d5e53c6c092d",
    measurementId: "G-0M9TDBE1HR"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
  onAuthStateChanged,
};
