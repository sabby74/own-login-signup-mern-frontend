import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    axios.post("https://own-loginsignup-mern.onrender.com/signup", {name , email , password})
.then (result => {console.log(result)
    navigate('/login')

})
    .catch(err => console.log(err))
  }
  return (
    <div className="signup">
      <div className="">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="bg-red-400 flex">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="">
            Register
          </button>
        </form>
        <p>Already Have an Account!</p>
        <Link
          to="/login"
          className=""
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
