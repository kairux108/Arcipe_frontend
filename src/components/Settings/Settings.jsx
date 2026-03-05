import './Settings.css';
import React, { useState } from 'react';

const SECTIONS = [
  { id: 'profile',       icon: '👤', label: 'Profile'       },
  { id: 'account',       icon: '🔑', label: 'Account'       },
  { id: 'notifications', icon: '🔔', label: 'Notifications' },
  { id: 'security',      icon: '🛡️', label: 'Security'      },
  { id: 'billing',       icon: '💳', label: 'Billing'       },
  { id: 'appearance',    icon: '🎨', label: 'Appearance'    },
];

export default function Settings({ showToast }) {
  const [sec,      setSec]      = useState('profile');
  const [notifs,   setNotifs]   = useState({ email: true, push: true, weekly: false, marketing: false });
  const [twoFA,    setTwoFA]    = useState(false);
  const [theme,    setTheme]    = useState('Dark');
  const [accent,   setAccent]   = useState('#3b82f6');

  const accents = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
  const toggle  = key => setNotifs(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="page-content settings-layout">

      {/* Sub-nav */}
      <aside className="settings-subnav glass-card">
        <p className="subnav-label">Settings</p>
        {SECTIONS.map(s => (
          <button
            key={s.id}
            className={`subnav-item ${sec === s.id ? 'active' : ''}`}
            onClick={() => setSec(s.id)}
          >
            <span>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </aside>

      {/* Panel */}
      <div className="settings-panel">

        {/* ── Profile ── */}
        {sec === 'profile' && (
          <div className="panel-section">
            <h2 className="panel-title">Profile</h2>
            <p className="panel-sub">Manage your personal information.</p>
            <div className="avatar-row">
              <div className="big-avatar">JD</div>
              <div>
                <button className="btn-secondary" onClick={() => showToast('Upload dialog opened')}>Change Photo</button>
                <p className="hint">JPG, PNG · Max 2MB</p>
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-field"><label>First Name</label><input defaultValue="John" /></div>
              <div className="form-field"><label>Last Name</label><input defaultValue="Doe" /></div>
            </div>
            <div className="form-field"><label>Email</label><input type="email" defaultValue="john@nexus.io" /></div>
            <div className="form-field"><label>Role</label><input defaultValue="Product Manager" /></div>
            <div className="form-field"><label>Bio</label><textarea rows={3} defaultValue="Building great things at Nexus." /></div>
            <button className="btn-primary" onClick={() => showToast('Profile saved ✓')}>Save Changes</button>
          </div>
        )}

        {/* ── Account ── */}
        {sec === 'account' && (
          <div className="panel-section">
            <h2 className="panel-title">Account</h2>
            <p className="panel-sub">Manage account details and preferences.</p>
            <div className="form-field"><label>Username</label><input defaultValue="@john_doe" /></div>
            <div className="form-field">
              <label>Language</label>
              <select><option>English (US)</option><option>Spanish</option><option>French</option></select>
            </div>
            <div className="form-field">
              <label>Timezone</label>
              <select><option>UTC+8 (Asia/Manila)</option><option>UTC-8 (Pacific)</option><option>UTC+0 (GMT)</option></select>
            </div>
            <button className="btn-primary" onClick={() => showToast('Account updated ✓')}>Save Changes</button>
            <div className="danger-zone glass-card">
              <h3 className="danger-title">Danger Zone</h3>
              <div className="danger-row">
                <div>
                  <p className="danger-label">Delete Account</p>
                  <p className="hint">This action is permanent and cannot be undone.</p>
                </div>
                <button className="btn-danger" onClick={() => showToast('Confirmation required')}>Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* ── Notifications ── */}
        {sec === 'notifications' && (
          <div className="panel-section">
            <h2 className="panel-title">Notifications</h2>
            <p className="panel-sub">Control how you receive notifications.</p>
            <div className="toggle-list">
              {[
                { key: 'email',     label: 'Email Notifications', desc: 'Receive updates via email'   },
                { key: 'push',      label: 'Push Notifications',  desc: 'Browser push alerts'          },
                { key: 'weekly',    label: 'Weekly Digest',       desc: 'A weekly activity summary'    },
                { key: 'marketing', label: 'Marketing Emails',    desc: 'Tips and promotions'          },
              ].map(({ key, label, desc }) => (
                <div
                  key={key}
                  className="toggle-row"
                  onClick={() => { toggle(key); showToast(`${label} ${notifs[key] ? 'disabled' : 'enabled'}`); }}
                >
                  <div>
                    <p className="toggle-label">{label}</p>
                    <p className="toggle-desc">{desc}</p>
                  </div>
                  <div className={`toggle-switch ${notifs[key] ? 'on' : ''}`}>
                    <div className="toggle-thumb" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Security ── */}
        {sec === 'security' && (
          <div className="panel-section">
            <h2 className="panel-title">Security</h2>
            <p className="panel-sub">Keep your account safe.</p>
            <div className="form-field"><label>Current Password</label><input type="password" placeholder="••••••••" /></div>
            <div className="form-row-2">
              <div className="form-field"><label>New Password</label><input type="password" placeholder="••••••••" /></div>
              <div className="form-field"><label>Confirm</label><input type="password" placeholder="••••••••" /></div>
            </div>
            <button className="btn-primary" onClick={() => showToast('Password updated ✓')}>Update Password</button>
            <div
              className="toggle-row glass-card"
              style={{ padding: '18px 20px', borderRadius: '14px', cursor: 'pointer' }}
              onClick={() => { setTwoFA(p => !p); showToast(`2FA ${twoFA ? 'disabled' : 'enabled'}`); }}
            >
              <div>
                <p className="toggle-label">Two-Factor Authentication</p>
                <p className="toggle-desc">Extra security layer for your account.</p>
              </div>
              <div className={`toggle-switch ${twoFA ? 'on' : ''}`}><div className="toggle-thumb" /></div>
            </div>
            <div>
              <p className="subnav-label" style={{ marginBottom: '10px' }}>Active Sessions</p>
              {[
                { label: '💻  Chrome · Mac OS · Current', current: true  },
                { label: '📱  Safari · iPhone 15',         current: false },
                { label: '🖥️  Firefox · Windows 11',       current: false },
              ].map(s => (
                <div key={s.label} className="session-item">
                  <span className="session-label">{s.label}</span>
                  {s.current
                    ? <span className="current-badge">Current</span>
                    : <button className="btn-ghost" onClick={() => showToast('Session revoked')}>Revoke</button>
                  }
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Billing ── */}
        {sec === 'billing' && (
          <div className="panel-section">
            <h2 className="panel-title">Billing</h2>
            <p className="panel-sub">Manage your subscription and payments.</p>
            <div className="plan-card glass-card">
              <div className="plan-row">
                <div>
                  <p className="plan-name">Pro Plan</p>
                  <p className="plan-price">$29 <span>/month</span></p>
                </div>
                <span className="current-badge">Active</span>
              </div>
              <p className="hint">Renews April 5, 2026</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button className="btn-secondary" onClick={() => showToast('Plan management opened')}>Change Plan</button>
                <button className="btn-ghost-red" onClick={() => showToast('Cancellation requested')}>Cancel Subscription</button>
              </div>
            </div>
            <div className="form-field">
              <label>Payment Method</label>
              <div className="payment-row glass-card">
                <span>💳</span>
                <span style={{ flex: 1, fontSize: '14px' }}>Visa ending in 4242</span>
                <button className="btn-ghost" onClick={() => showToast('Update card opened')}>Update</button>
              </div>
            </div>
            <button className="btn-secondary" onClick={() => showToast('Invoices downloaded')}>Download Invoices</button>
          </div>
        )}

        {/* ── Appearance ── */}
        {sec === 'appearance' && (
          <div className="panel-section">
            <h2 className="panel-title">Appearance</h2>
            <p className="panel-sub">Customize how Nexus looks for you.</p>
            <div className="form-field">
              <label>Theme</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['Dark', 'Light', 'System'].map(t => (
                  <button
                    key={t}
                    className={`theme-btn ${theme === t ? 'active' : ''}`}
                    onClick={() => { setTheme(t); showToast(`${t} theme applied`); }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-field">
              <label>Accent Color</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {accents.map(c => (
                  <button
                    key={c}
                    className={`accent-dot ${accent === c ? 'selected' : ''}`}
                    style={{ background: c }}
                    onClick={() => { setAccent(c); showToast('Accent color updated'); }}
                  />
                ))}
              </div>
            </div>
            <div className="form-field">
              <label>Font Size</label>
              <select><option>Small</option><option>Medium</option><option>Large</option></select>
            </div>
            <button className="btn-primary" onClick={() => showToast('Appearance saved ✓')}>Save Preferences</button>
          </div>
        )}

      </div>
    </div>
  );
}