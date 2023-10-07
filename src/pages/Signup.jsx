import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://own-loginsignup-mern.onrender.com/user/signup",
        {
          name,
          email,
          password,
        }
      );
      console.log("Signup Response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-6">Sign Up</h2>

      <div className="w-96 bg-gray-500 p-6 shadow-lg rounded-md">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-lg mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 text-lg mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 text-lg mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSignup}
          className="w-full hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-xl text-slate-700 bg-yellow-400 rounded px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </button>
      </div>

      <Link
        to="/login"
        className="mt-6 hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-xl text-slate-700 bg-yellow-400 rounded px-5 py-3 inline-block"
      >
        Login
      </Link>
    </div>
  );
}

export default Signup;
