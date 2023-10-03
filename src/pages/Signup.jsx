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
      const response = await axios.post("https://own-loginsignup-mern.onrender.com/user/signup", {
        name,
        email,
        password,
      });
      console.log("Signup Response:", response.data);
      {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
 
  return (
    <div className="signup">
      <h2>Signup</h2>
      <input
        type="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <br />
      <button onClick={handleSignup}>Signup</button>
      <Link className="" to="/login">
        Login
      </Link>
    </div>

  );
}

export default Signup;
