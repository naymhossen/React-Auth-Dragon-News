/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.confug";

export const AuthContext = createContext(null);
export const DataContex = createContext(null);

//google pop up login
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mainData, setMainData] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/data/news.json"
    )
      .then((res) => res.json())
      .then((data) => setMainData(data));
  }, []);


  //user OnState Changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoding(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])


  // Google Login
  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Email & Password signup
  const createUser = (email, password) => {
    setLoding(true);
    return  createUserWithEmailAndPassword(auth, email, password)
  }

  // User Login
  const userSignin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //user signout sfunction
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  }


  const authInfo = { user, googleLogin, createUser, userSignin, logOut, loding };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        <DataContex.Provider value={mainData}>
            {children}
          </DataContex.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
