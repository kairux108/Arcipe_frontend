import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Logging in user:", email);
    navigate('/dashboard'); // Navigates to dashboard
  };

  return (
    <div className="auth-wrapper">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICE</a>
          <a href="#">CONTACT</a>
        </div>
        <button className="nav-login-btn">LOGIN</button>
      </nav>

      <main className="center-container">
        <div className="glass-card">
          <h1>LOGIN</h1>
          
          {/* FIX 1: Added onSubmit here */}
          <form className="form-group" onSubmit={handleSubmit}> 
            
            <div className="input-box">
              {/* FIX 2: Added value and onChange */}
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon">📧</span>
            </div>

            <div className="input-box">
              {/* FIX 3: Added value and onChange */}
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon">🔒</span>
            </div>

            <div className="row-options">
              <label><input type="checkbox" /> Remember Me</label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login">Login</button>

            <p className="signup-link">
              Don't have an account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;