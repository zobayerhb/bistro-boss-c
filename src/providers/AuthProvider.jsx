import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useUserAxios from "../hooks/useUserAxios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axisoPublic = useUserAxios();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // get the current signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User--->", currentUser);
      if (currentUser?.email) {
        setUser(currentUser);
        const userInfo = { email: currentUser?.email };
        axisoPublic
          .post("/jwt", userInfo, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      } else {
        // token remove when user logout
        axisoPublic
          .post("/jwt-logout", {}, { withCredentials: true })
          .then((result) => {
            console.log(result.data);
            setUser(currentUser);
          });
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    logoutUser,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
