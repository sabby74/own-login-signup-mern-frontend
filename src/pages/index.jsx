import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-red-400 h-14 items-center p-3 mb-4 rounded'>
      <h1>Welcome-   Schedule Your Car Service</h1>
      <br />
      <div className="bg-blue-400 h-10 flex flex-row justify-around p-2 mb-4 rounded w-20 text-white">
      <button className="hover:italic" onClick={() => navigate("/")}>
        Logout
      </button> 
      </div>
      
      </div>
  )
}

export default Index