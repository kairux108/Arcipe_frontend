import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="auth-wrapper">
      {/* 1. Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICE</a>
          <a href="#">CONTACT</a>
        </div>
        <button className="nav-login-btn">LOGIN</button>
      </nav>

      {/* 2. Centered Content Container */}
      <main className="center-container">
        <div className="glass-card">
          <h1>LOGIN</h1>
          
          <form className="form-group">
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <span className="icon">📧</span>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required />
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