import './Users.css';
import React, { useState } from 'react';

const ALL_USERS = [
  { id:1, name:'Alex Morgan',   email:'alex@nexus.io',   role:'Admin',   plan:'Enterprise', status:'Active',    joined:'Jan 2023', av:'AM' },
  { id:2, name:'Jamie Rivera',  email:'jamie@nexus.io',  role:'Member',  plan:'Pro',        status:'Active',    joined:'Mar 2023', av:'JR' },
  { id:3, name:'Sam Chen',      email:'sam@nexus.io',    role:'Member',  plan:'Free',       status:'Inactive',  joined:'Nov 2022', av:'SC' },
  { id:4, name:'Dana Kim',      email:'dana@nexus.io',   role:'Manager', plan:'Pro',        status:'Active',    joined:'Feb 2023', av:'DK' },
  { id:5, name:'Riley Park',    email:'riley@nexus.io',  role:'Member',  plan:'Free',       status:'Active',    joined:'Apr 2023', av:'RP' },
  { id:6, name:'Jordan Lee',    email:'jordan@nexus.io', role:'Member',  plan:'Pro',        status:'Suspended', joined:'Jun 2023', av:'JL' },
  { id:7, name:'Casey Wright',  email:'casey@nexus.io',  role:'Member',  plan:'Free',       status:'Active',    joined:'Aug 2023', av:'CW' },
  { id:8, name:'Taylor Brooks', email:'taylor@nexus.io', role:'Analyst', plan:'Pro',        status:'Active',    joined:'Sep 2023', av:'TB' },
];

const STATUS_STYLE = {
  Active:    { bg: 'rgba(34,197,94,0.12)',   text: '#4ade80' },
  Inactive:  { bg: 'rgba(148,163,184,0.1)',  text: '#94a3b8' },
  Suspended: { bg: 'rgba(239,68,68,0.12)',   text: '#f87171' },
};

const PLAN_STYLE = {
  Enterprise: { bg: 'rgba(168,85,247,0.12)', text: '#c084fc' },
  Pro:        { bg: 'rgba(59,130,246,0.12)', text: '#60a5fa' },
  Free:       { bg: 'rgba(148,163,184,0.1)', text: '#94a3b8' },
};

const GRADIENTS = [
  'linear-gradient(135deg,#1d4ed8,#3b82f6)',
  'linear-gradient(135deg,#6d28d9,#8b5cf6)',
  'linear-gradient(135deg,#065f46,#10b981)',
  'linear-gradient(135deg,#92400e,#f59e0b)',
  'linear-gradient(135deg,#9f1239,#f43f5e)',
  'linear-gradient(135deg,#0e7490,#22d3ee)',
  'linear-gradient(135deg,#1e3a5f,#3b82f6)',
  'linear-gradient(135deg,#4a1d96,#a78bfa)',
];

export default function Users({ showToast }) {
  const [filter, setFilter]     = useState('All');
  const [search, setSearch]     = useState('');
  const [showModal, setShowModal] = useState(false);

  const visible = ALL_USERS.filter(u =>
    (filter === 'All' || u.status === filter) &&
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">

      <div className="page-header">
        <div>
          <h1 className="page-title">Users</h1>
          <p className="page-subtitle">{ALL_USERS.length} registered users</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>+ Add User</button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {[
          { label: 'Total Users', value: ALL_USERS.length,                                      icon: '👥' },
          { label: 'Active',      value: ALL_USERS.filter(u => u.status === 'Active').length,    icon: '✅' },
          { label: 'Pro & Up',    value: ALL_USERS.filter(u => u.plan !== 'Free').length,        icon: '⭐' },
          { label: 'Suspended',   value: ALL_USERS.filter(u => u.status === 'Suspended').length, icon: '🚫' },
        ].map(s => (
          <div key={s.label} className="stat-card glass-card" onClick={() => showToast(`${s.label}: ${s.value}`)}>
            <div className="stat-top"><span className="stat-icon">{s.icon}</span></div>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="filter-tabs">
          {['All', 'Active', 'Inactive', 'Suspended'].map(f => (
            <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="search-box">
          <span>🔍</span>
          <input placeholder="Search users…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* User cards */}
      <div className="users-grid">
        {visible.map((u, i) => (
          <div key={u.id} className="user-card glass-card" onClick={() => showToast(`Viewing ${u.name}`)}>
            <div className="user-card-top">
              <div className="user-avatar" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                {u.av}
              </div>
              <span className="status-badge" style={{ background: STATUS_STYLE[u.status].bg, color: STATUS_STYLE[u.status].text }}>
                {u.status}
              </span>
            </div>
            <h3 className="user-name">{u.name}</h3>
            <p className="user-email">{u.email}</p>
            <div className="user-tags">
              <span className="role-tag">{u.role}</span>
              <span className="status-badge" style={{ background: PLAN_STYLE[u.plan].bg, color: PLAN_STYLE[u.plan].text }}>
                {u.plan}
              </span>
            </div>
            <p className="user-joined">Joined {u.joined}</p>
            <div className="card-actions">
              <button className="card-btn" onClick={e => { e.stopPropagation(); showToast(`Editing ${u.name}`); }}>Edit</button>
              <button className="card-btn danger" onClick={e => { e.stopPropagation(); showToast(`${u.name} removed`); }}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal glass-card" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">Add New User</h2>
            <div className="modal-field"><label>Full Name</label><input placeholder="e.g. John Doe" /></div>
            <div className="modal-field"><label>Email</label><input type="email" placeholder="john@nexus.io" /></div>
            <div className="modal-field">
              <label>Role</label>
              <select><option>Member</option><option>Admin</option><option>Manager</option><option>Analyst</option></select>
            </div>
            <div className="modal-field">
              <label>Plan</label>
              <select><option>Free</option><option>Pro</option><option>Enterprise</option></select>
            </div>
            <div className="modal-btns">
              <button className="btn-ghost" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => { setShowModal(false); showToast('User added! ✓'); }}>Add User</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}