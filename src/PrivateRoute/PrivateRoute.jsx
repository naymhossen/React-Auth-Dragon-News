/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Firebase/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loding} = useContext(AuthContext);

    const location = useLocation();


    if(loding){
        return <span className="loading loading-bars flex justify-center items-center h-screen mx-auto loading-lg"></span> ;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;