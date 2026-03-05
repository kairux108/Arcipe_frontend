import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar /> 
      
      <main className="main-content">
        <div className="dash-header">
          <h2>Welcome Back,</h2>
          <h2>Operator</h2>
          <span className="user-role">Admin</span>
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