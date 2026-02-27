import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (email && password) {
        navigate('/dashboard');
      }
    };
  
    return (
      <div className="futuristic-container">
        {/* Animated background elements */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
  
        <div className="glass-box">
          <div className="box-header">
            <div className="cyber-line"></div>
            <h2>Login </h2>
            <p>Initialize secure session</p>
          </div>
  
          <form onSubmit={handleLogin} className="cyber-form">
            <div className="input-group">
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" " 
              />
              <label>Operator Email</label>
              <div className="bar"></div>
            </div>
  
            <div className="input-group">
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" " 
              />
              <label>Password</label>
              <div className="bar"></div>
            </div>
  
            <button type="submit" className="neon-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              LOGIN
            </button>
          </form>
  
          <div className="box-footer">
            <a href="#">ENCRYPTED RECOVERY</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;