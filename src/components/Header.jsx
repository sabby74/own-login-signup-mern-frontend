import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-yellow-500 flex flex-row justify-around p-5 mb-6 rounded-lg " >
      <h2> Cars Maintenance App</h2>
      
        <Link className="hover:italic" to="/login">
          <div>Login</div>
        </Link>
        <Link className="hover:italic" to="/signup">
          <div>Sign Up</div>
        </Link>
        <button className="hover:italic" onClick={() => navigate("/login")}>
        Logout
      </button>
     
      
      
      </nav>
  )
}

export default Header