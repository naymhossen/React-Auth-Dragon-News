import { Link } from "react-router-dom";
import Navbar from "../Pages/Page/Navbar/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto mt-3 max-w-md p-8 space-y-3 rounded-xl bg-gray-200">
        <h1 className="text-2xl font-bold text-center">Register your account</h1>
        <div className="border "></div>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block font-bold">Your Name</label>
            <input
              type="text"
              name="text"
              required
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border-none"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block font-bold">Photo URL</label>
            <input
              type="text"
              name="text"
              required
              id="image"
              placeholder="Enter your photo link"
              className="w-full px-4 py-3 rounded-md border-none"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block font-bold">Email address</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-md border-none"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block font-bold">Password</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div className="flex items-center gap-3">
       <input type="checkbox" name="" id="" required />
        <p>Accept Term & Conditions</p>
       </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-md bg-black text-white font-semibold"
          >
            Register
          </button>
        </form>
       
        <p className="text-xs text-center sm:px-6 font-semibold">
          Alrady Have An Account ?
          <span className="text-red-600 font-bold underline">
            <Link to="/login">Login Now</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
