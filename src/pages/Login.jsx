import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://own-loginsignup-mern.onrender.com/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="bg-yellow-200">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="bg-green-200">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="bg-red-300 h-12">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="">
            Login
          </button>
        </form>
        <br />
        <p>Create an Account here </p>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
