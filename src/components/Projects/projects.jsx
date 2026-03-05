import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const navigate = useNavigate();

  const projectList = [
    { id: '001', name: 'Neural Grid', status: 'Active', progress: '85%' },
    { id: '002', name: 'Echo Stream', status: 'Pending', progress: '12%' },
    { id: '003', name: 'Vector Core', status: 'Active', progress: '40%' }
  ];

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h1 className="logo">ARCIPE</h1>
        <nav className="side-links">
          <a onClick={() => navigate('/dashboard')}>Dashboard</a>
          <a className="active">Projects</a>
          <a onClick={() => navigate('/team')}>Team</a>
          <a onClick={() => navigate('/settings')}>Settings</a>
        </nav>
        <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
      </aside>

      <main className="main-content">
        <div className="dash-header">
          <h2>Project Registry</h2>
          <p className="user-role">Management</p>
        </div>

        <div className="project-grid">
          {projectList.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-info">
                <span>{project.id}</span>
                <h3>{project.name}</h3>
              </div>
              <div className="project-meta">
                <span className={project.status === 'Active' ? 'status-online' : ''}>{project.status}</span>
                <p>{project.progress} Complete</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;