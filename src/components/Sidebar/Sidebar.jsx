import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <aside className="sidebar">
      <h1 className="logo">ARCIPE</h1>
      <nav className="side-links">
        <a onClick={() => navigate('/dashboard')} className={isActive('/dashboard')}>Dashboard</a>
        <a onClick={() => navigate('/projects')} className={isActive('/projects')}>Projects</a>
        <a onClick={() => navigate('/team')} className={isActive('/team')}>Team</a>
        <a onClick={() => navigate('/settings')} className={isActive('/settings')}>Settings</a>
      </nav>
      <button className="logout-btn" onClick={() => navigate('/')}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;