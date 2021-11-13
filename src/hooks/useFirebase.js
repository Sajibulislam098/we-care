import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,getIdToken,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";

initializeFirebaseAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [success, setSuccess] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [token,setToken]=useState('')
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // To check if user is login
  useEffect(() => {
   const unsubscribed= onAuthStateChanged(auth, (user) => {
      setCheckUser(true);
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => {
          setToken(idToken);
        })
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return()=>unsubscribed;
  }, [auth]);

  // Login with google function
  const loginWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');

        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Login with email pass function
  const loginWithEmailPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/weak-password")
          setMessage("Password should be at least 6 characters");
        else if (errorCode === "auth/user-not-found")
          setMessage("User not found for this email. Please sign up");
        else if (errorCode === "auth/wrong-password")
          setMessage("Wrong Password");
        else setMessage("Something went wrong, Please try again later");
      });
  };

  // Sign up with email pass function
  const signUpWithEmailPass = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setAuthError("");
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, 'POST');
        console.log(user.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setSuccess("Registration Successfull. Please login");
          })
          .catch((error) => {
            // An error occurred
          });
      })
      .catch((error) => {
        setAuthError(error.message);
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/weak-password")
          setMessage2("Password should be at least 6 characters");
        else if (errorCode === "auth/email-already-in-use")
          setMessage2("This email is already registered. Please Log In");
        else if (errorCode === "auth/network-request-failed")
          setMessage2("Network error! Please try again later");
        else if (errorCode === "auth/invalid-email")
          setMessage2("Invalid Email");
        else setMessage2("Something went wrong. Please try again later");
      })
      .finally(() => setIsLoading(false));
  };

  // Logout function
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    fetch(`https://glacial-reef-73275.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://glacial-reef-73275.herokuapp.com/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    loginWithGoogle,
    loginWithEmailPass,
    signUpWithEmailPass,
    logout,
    message,
    setMessage,
    message2,
    setMessage2,
    success,
    setSuccess,
    checkUser,
    admin,
    authError,
    isLoading,
    token
  };
};
export default useFirebase;
