import { Link } from "react-router-dom";
import Navbar from "../Pages/Page/Navbar/Navbar";


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <>
        <Navbar />
            <div className="w-full mx-auto mt-16 max-w-md p-8 space-y-3 rounded-xl bg-gray-200">
	<h1 className="text-2xl font-bold text-center">Login your account</h1>
    <div className="border "></div>
	<form  onSubmit={handleLogin} className="space-y-6">
		<div className="space-y-1 text-sm">
			<label className="block font-bold">Email address</label>
			<input type="email" name="email"  required id="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md border-none" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block font-bold">Password</label>
			<input type="password" required name="password" id="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-md" />
		</div>
		<button type="submit" className="block w-full p-3 text-center rounded-md bg-black text-white font-semibold">Sign in</button>
	</form>
	<p className="text-xs text-center sm:px-6 font-semibold">Dont’t Have An Account ? <span className="text-red-600 font-bold underline"><Link to="/register">Register</Link></span>
	</p>
</div>
        </>
    );
};

export default Login;