import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h1 className="logo">ARCIPE</h1>
        <nav className="side-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Team</a>
          <a href="#">Settings</a>
        </nav>
        <button className="logout-btn" onClick={() => navigate('/')}>
          Logout
        </button>
      </aside>

      <main className="main-content">
        <div className="dash-header">
          <h2>Welcome Back, Operator</h2>
          <p className="user-role">Admin</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>Total Users</span>
            <h3>1,284</h3>
          </div>
          <div className="stat-card">
            <span>Active Tasks</span>
            <h3>42</h3>
          </div>
          <div className="stat-card">
            <span>System Status</span>
            <h3 className="status-online">Online</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;