import './DashboardHome.css';
import React from 'react';

const STATS = [
  { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true,  icon: '💰' },
  { label: 'Active Users',  value: '3,842',   change: '+8.1%',  up: true,  icon: '👥' },
  { label: 'New Orders',    value: '1,073',   change: '-2.4%',  up: false, icon: '🛒' },
  { label: 'Conversion',    value: '5.27%',   change: '+0.9%',  up: true,  icon: '📈' },
];

const ACTIVITY = [
  { user: 'Alex Morgan',   action: 'Placed a new order',          time: '2 min ago',  av: 'AM' },
  { user: 'Jamie Rivera',  action: 'Upgraded to Pro plan',        time: '15 min ago', av: 'JR' },
  { user: 'Sam Chen',      action: 'Submitted a support ticket',  time: '1 hr ago',   av: 'SC' },
  { user: 'Dana Kim',      action: 'Completed onboarding',        time: '3 hrs ago',  av: 'DK' },
  { user: 'Riley Park',    action: 'Left a 5-star review',        time: '5 hrs ago',  av: 'RP' },
];

const GOALS = [
  { label: 'Revenue Target', pct: 72 },
  { label: 'New Users',      pct: 55 },
  { label: 'Orders Goal',    pct: 88 },
];

const QUICK_ACTIONS = ['Add User', 'Create Order', 'Upload File', 'Send Report', 'View Logs', 'Export CSV'];

export default function DashboardHome({ showToast, setActivePage }) {
  return (
    <div className="page-content">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back, John. Here's what's happening today.</p>
        </div>
        <button className="btn-primary" onClick={() => showToast('Report generated!')}>
          + New Report
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {STATS.map(s => (
          <div
            key={s.label}
            className="stat-card glass-card"
            onClick={() => showToast(`${s.label}: ${s.value}`)}
          >
            <div className="stat-top">
              <span className="stat-icon">{s.icon}</span>
              <span className={`stat-change ${s.up ? 'up' : 'down'}`}>{s.change}</span>
            </div>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions + Goals */}
      <div className="mid-row">
        <div className="glass-card">
          <h2 className="card-title">Quick Actions</h2>
          <div className="actions-grid">
            {QUICK_ACTIONS.map(a => (
              <button key={a} className="action-btn" onClick={() => showToast(`${a} opened`)}>
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Monthly Goals</h2>
          {GOALS.map(({ label, pct }) => (
            <div key={label} className="progress-item" onClick={() => showToast(`${label}: ${pct}%`)}>
              <div className="progress-header">
                <span>{label}</span>
                <span className="pct">{pct}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card">
        <div className="card-header">
          <h2 className="card-title">Recent Activity</h2>
          <button className="btn-ghost" onClick={() => setActivePage('orders')}>
            View All Orders →
          </button>
        </div>
        <ul className="activity-list">
          {ACTIVITY.map(a => (
            <li
              key={a.user}
              className="activity-item"
              onClick={() => showToast(`Viewing ${a.user}'s profile`)}
            >
              <div className="activity-avatar">{a.av}</div>
              <div className="activity-info">
                <p className="activity-user">{a.user}</p>
                <p className="activity-action">{a.action}</p>
              </div>
              <span className="activity-time">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}