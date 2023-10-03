import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('https://own-loginsignup-mern.onrender.com/user/login', { email, password });
      console.log('you are logged in :', response.data);
      console.log(response.data);
      if (response.data === "you are logged in") {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (

    <div className="login">
    <h2>Login</h2>
    <br />
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <br />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <br />
    <button onClick={handleLogin}>Login</button>
    <br />
    <Link to="/signup">Signup</Link>
  </div>

  );
}

export default Login;
