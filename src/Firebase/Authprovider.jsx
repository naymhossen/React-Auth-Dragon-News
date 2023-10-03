/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.confug";


export const AuthContext = createContext(null);

export const DataContex = createContext(null);


const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {

  const [mainData, setMainData] = useState([]);

  useEffect( () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/data/news.json')
    .then(res => res.json())
    .then(data => setMainData(data))
    
  }, [])


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }



    const authInfo = {googleLogin};

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
