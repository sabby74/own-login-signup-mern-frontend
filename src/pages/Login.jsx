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
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <div className="w-72 bg-gray-500 p-4 shadow-md rounded-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-2 py-1 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-2 py-1 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-slate-700 bg-yellow-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </div>

      <Link
        to="/signup"
        className="mt-4 hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-slate-700 bg-yellow-400 rounded px-4 py-2 inline-block"
      >
        Signup
      </Link>
    </div>
  );
}

export default Login;
