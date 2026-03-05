import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="login-wrapper">

      {/* ── LEFT PANEL ── */}
      <div className="login-left">
        {/* Floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="left-content">
          {/* Logo */}
          <div className="brand">
            <div className="brand-icon">◈</div>
            <span className="brand-name">Nexus</span>
          </div>

          {/* Headline */}
          <div className="left-text">
            <h1 className="left-heading">
              Manage everything<br />
              <span className="left-heading-accent">in one place.</span>
            </h1>
            <p className="left-sub">
              Your all-in-one dashboard for analytics, orders,
              users, and products — built for modern teams.
            </p>
          </div>

          {/* Feature pills */}
          <div className="feature-list">
            {[
              { icon: '📊', label: 'Real-time Analytics' },
              { icon: '🛒', label: 'Order Management'    },
              { icon: '👥', label: 'Team Collaboration'  },
            ].map(f => (
              <div key={f.label} className="feature-pill">
                <span>{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="left-footer">Trusted by 3,800+ teams worldwide</p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="login-right">
        <div className="login-card">

          {/* Card header */}
          <div className="card-head">
            <h2 className="card-title">Welcome back</h2>
            <p className="card-sub">Sign in to your Nexus account</p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>

            <div className="field-group">
              <label className="field-label">Email address</label>
              <div className="field-wrap">
                <span className="field-icon">✉</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Password</label>
              <div className="field-wrap">
                <span className="field-icon">🔒</span>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••••"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={() => setShowPass(p => !p)}
                >
                  {showPass ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className={`login-btn ${loading ? 'loading' : ''}`} disabled={loading}>
              {loading ? <span className="spinner" /> : 'Sign In'}
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span />
            <p>or continue with</p>
            <span />
          </div>

          {/* Social */}
          <div className="social-row">
            <button className="social-btn" onClick={() => {}}>
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
              Google
            </button>
            <button className="social-btn" onClick={() => {}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </button>
          </div>

          <p className="register-link">
            Don't have an account? <a href="#">Create one free</a>
          </p>

        </div>
      </div>

    </div>
  );
}