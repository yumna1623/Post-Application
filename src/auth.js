import { 
    auth, 
    database, 
    createUserWithEmailAndPassword, 
    ref, 
    set, 
    onAuthStateChanged, 
} from "./config.js";
  import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  
  const handleSignup = () => {
      const email = document.getElementById("email-signup").value;
      const password = document.getElementById("password-signup").value;
  
      if (email && password) {
          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredentials) => {
                  const usersRef = ref(database, `users/${userCredentials.user.uid}/`);
  
                  set(usersRef, {
                      email: email,
                      createdAt: new Date().getTime()
                  }).then(() => {
                      alert("User Created Successfully");
                      window.location.href = "../dist/post.html"; // Redirect after database update
                  }).catch((error) => {
                      alert(error.message);
                  });
              })
              .catch((error) => {
                  console.log(error);
                  alert(error.message);
              });
      }
  };
  
  const handleLogin = () => {
      const email = document.getElementById("email-login").value;
      const password = document.getElementById("password-login").value;
  
      if (email && password) {
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredentials) => {
                  alert("User Logged In Successfully");
                  window.location.href = "./quiz.html";
              })
              .catch((error) => {
                  alert(error.message);
              });
      }
  };

// onAuthStateChanged(auth, (user) => {
//       const LogOutBtn = document.getElementById("logout-btn");
//       if (LogOutBtn) {
//           if (user) {
//               LogOutBtn.style.display = "block";
//               LogOutBtn.addEventListener("click", (e) => {
//                   e.preventDefault();
//                   signOut(auth).then(() => {
//                       window.location.href = "./signUp.html";
//                   });
//               });
//           } else {
//               console.log("User not logged in");
//               LogOutBtn.style.display = "none";
//           }
//       }
//   });
onAuthStateChanged(auth, (user) => {
    if (user) {
      if (window.location.pathname !== "/post.html") {
        window.location.href = "../post.html";
      }
    } else {
      if (window.location.pathname !== "/index.html") {
        window.location.href = "../index.html";
      }
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
      const SignUpbtn = document.getElementById("Signup-btn");
      if (SignUpbtn) {
          SignUpbtn.addEventListener("click", (e) => {
              e.preventDefault();
              handleSignup();
          });
      }
  
      const Loginbtn = document.getElementById("Login-btn");
      if (Loginbtn) {
          Loginbtn.addEventListener("click", (e) => {
              e.preventDefault();
              handleLogin();
          });
      }
  });
  