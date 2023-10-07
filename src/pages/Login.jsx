import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://own-loginsignup-mern.onrender.com/user/login",
        { email, password }
      );
      console.log("You are logged in:", response.data);
      if (response.data === "you are logged in") {
        navigate("/service");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-6">Login</h2>

      <div className="w-96 bg-gray-500 p-6 shadow-lg rounded-md">
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
          onClick={handleLogin}
          className="w-full hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-xl text-slate-700 bg-yellow-400 rounded px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </div>

      <Link
        to="/signup"
        className="mt-6 hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-xl text-slate-700 bg-yellow-400 rounded px-5 py-3 inline-block"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default Login;
