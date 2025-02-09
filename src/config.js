import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import {
  getDatabase,  // ✅ Correct import
  ref,
  set
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUby9tQlTb1oRWWNUJJFx3XZ4MWFAFC40",
  authDomain: "blog-app-3c075.firebaseapp.com",
  projectId: "blog-app-3c075",
  storageBucket: "blog-app-3c075.appspot.com",  // ✅ Fixed storage bucket
  messagingSenderId: "180806435607",
  appId: "1:180806435607:web:499a10a41c6ef43d8f6d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);  // ✅ Correct database initialization

export {
  auth,
  createUserWithEmailAndPassword,
  database,  // ✅ Now correctly exported
  ref,
  set,
  onAuthStateChanged,
  signOut
};
