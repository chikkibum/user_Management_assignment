import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bgimage from "../assets/bgimage1.jpg";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();




    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        
        <div className="flex w-full max-w-4xl shadow-lg bg-white">
          {/* Left side - Form Section */}
          <div className="w-svw p-8">
            <div className="mb-6">
              {/* <img src={Logo} alt="FirstList" className="w-25 h-12 mb-4" /> */}


              <h2 className="text-3xl font-bold mb-2">Sign up</h2>
              <p className="text-gray-500">Sign up to enjoy the features</p>
            </div>
  
            {error && <p className="text-red-500">{error}</p>}
  
            <form className="space-y-4" >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Jonas Khanwald" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="jonas.kahnwald@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
  
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <div className="relative mt-1">
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Set your Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
  
              {/* Sign up button */}
              <button 
                type="submit" 
               className="w-full bg-purple-400 text-white py-2 rounded-md hover:bg-blue-400 transition"
              >
                Sign up
              </button>
  
              {/* Sign in option */}
              <p className="text-center text-gray-500 mt-4">
                Already have an account? <Link to="/" className="text-blue-600">Sign in</Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    );
  };
  
  export default Signup;