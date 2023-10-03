import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { GrGithub, GrGoogle } from "react-icons/gr";


const Sociallogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline">
            <GrGoogle /> Login With Google
          </button>
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline">
            <GrGithub /> Login With Github
          </button>
        </div>
    );
};

export default Sociallogin;