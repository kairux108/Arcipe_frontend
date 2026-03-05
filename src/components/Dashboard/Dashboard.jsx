import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

import DashboardHome from './DashboardHome';
import Analytics     from '../Analytics/Analytics';
import Orders        from '../Orders/Orders';
import Users         from '../Users/Users';
import Products      from '../Products/Products';
import Settings      from '../Settings/Settings';

const NAV_ITEMS = [
  { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
  { id: 'analytics', icon: '📊', label: 'Analytics' },
  { id: 'orders',    icon: '🛒', label: 'Orders'    },
  { id: 'users',     icon: '👥', label: 'Users'     },
  { id: 'products',  icon: '📦', label: 'Products'  },
  { id: 'settings',  icon: '⚙️', label: 'Settings'  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('dashboard');
  const [collapsed,  setCollapsed]  = useState(false);
  const [toast,      setToast]      = useState(null);
  const [search,     setSearch]     = useState('');
  const [showLogout, setShowLogout] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleLogout = () => {
    showToast('Logging out…');
    setTimeout(() => navigate('/'), 1000);
  };

  const renderPage = () => {
    const props = { showToast, setActivePage };
    switch (activePage) {
      case 'dashboard': return <DashboardHome {...props} />;
      case 'analytics': return <Analytics     {...props} />;
      case 'orders':    return <Orders        {...props} />;
      case 'users':     return <Users         {...props} />;
      case 'products':  return <Products      {...props} />;
      case 'settings':  return <Settings      {...props} />;
      default:          return <DashboardHome {...props} />;
    }
  };

  return (
    <div className="dash-wrapper">

      {/* ── Sidebar ── */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : 'open'}`}>

        <div className="sidebar-logo">
          <span className="logo-icon">◈</span>
          {!collapsed && <span className="logo-text">Nexus</span>}
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ id, icon, label }) => (
            <button
              key={id}
              className={`nav-item ${activePage === id ? 'active' : ''}`}
              onClick={() => setActivePage(id)}
              title={collapsed ? label : ''}
            >
              <span className="nav-icon">{icon}</span>
              {!collapsed && <span className="nav-label">{label}</span>}
              {activePage === id && !collapsed && <span className="nav-pill" />}
            </button>
          ))}
        </nav>

        {/* ── Sidebar bottom: user + logout ── */}
        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="sidebar-avatar">JD</div>
            {!collapsed && (
              <div className="sidebar-user-info">
                <p className="sidebar-user-name">John Doe</p>
                <p className="sidebar-user-role">Admin</p>
              </div>
            )}
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
            title={collapsed ? 'Logout' : ''}
          >
            <span className="logout-icon">→</span>
            {!collapsed && <span>Logout</span>}
          </button>
        </div>

        <button className="sidebar-toggle" onClick={() => setCollapsed(p => !p)}>
          {collapsed ? '▶' : '◀'}
        </button>

      </aside>

      {/* ── Main area ── */}
      <div className="dash-main">

        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-search">
            <span className="search-icon">🔍</span>
            <input
              placeholder="Search…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="topbar-actions">
            <button className="icon-btn" onClick={() => showToast('No new notifications')}>
              🔔
              <span className="notif-badge">3</span>
            </button>
            <button className="icon-btn" onClick={() => showToast('Messages opened')}>
              ✉️
            </button>
            {/* Avatar with dropdown */}
            <div className="avatar-wrap">
              <button
                className="avatar-btn"
                onClick={() => setShowLogout(p => !p)}
              >
                JD
              </button>
              {showLogout && (
                <div className="avatar-dropdown">
                  <button onClick={() => { setActivePage('settings'); setShowLogout(false); }}>
                    ⚙️ Settings
                  </button>
                  <div className="dropdown-divider" />
                  <button className="dropdown-logout" onClick={handleLogout}>
                    → Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content — swaps on nav click */}
        <div className="page-scroll" onClick={() => setShowLogout(false)}>
          {renderPage()}
        </div>

      </div>

      {/* Toast notification */}
      {toast && <div className="toast">{toast}</div>}

    </div>
  );
}