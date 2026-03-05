import './Analytics.css';
import React, { useState } from 'react';

const BAR_DATA = [
  { month: 'Oct', value: 62 },
  { month: 'Nov', value: 78 },
  { month: 'Dec', value: 55 },
  { month: 'Jan', value: 90 },
  { month: 'Feb', value: 73 },
  { month: 'Mar', value: 85 },
];

const SOURCES = [
  { label: 'Organic Search', pct: 42, color: '#3b82f6' },
  { label: 'Direct',         pct: 28, color: '#8b5cf6' },
  { label: 'Social Media',   pct: 18, color: '#10b981' },
  { label: 'Referral',       pct: 12, color: '#f59e0b' },
];

const TOP_PAGES = [
  { page: '/dashboard', views: '24,310', unique: '18,200', bounce: '28%', time: '5m 40s' },
  { page: '/products',  views: '18,540', unique: '14,900', bounce: '31%', time: '3m 20s' },
  { page: '/pricing',   views: '12,800', unique: '11,100', bounce: '42%', time: '2m 10s' },
  { page: '/blog',      views: '9,420',  unique: '7,800',  bounce: '55%', time: '4m 05s' },
  { page: '/contact',   views: '5,200',  unique: '4,600',  bounce: '60%', time: '1m 30s' },
];

export default function Analytics({ showToast }) {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="page-content">

      <div className="page-header">
        <div>
          <h1 className="page-title">Analytics</h1>
          <p className="page-subtitle">Performance metrics for the last 6 months.</p>
        </div>
        <button className="btn-primary" onClick={() => showToast('Report exported!')}>
          Export Report
        </button>
      </div>

      {/* KPIs */}
      <div className="stats-grid">
        {[
          { label: 'Total Visits',     value: '128,450', change: '+14.2%', up: true  },
          { label: 'Unique Visitors',  value: '94,210',  change: '+9.8%',  up: true  },
          { label: 'Bounce Rate',      value: '34.2%',   change: '-2.1%',  up: true  },
          { label: 'Avg. Session',     value: '4m 12s',  change: '-0.5%',  up: false },
        ].map(s => (
          <div key={s.label} className="stat-card glass-card" onClick={() => showToast(`${s.label}: ${s.value}`)}>
            <div className="stat-top">
              <span className={`stat-change ${s.up ? 'up' : 'down'}`}>{s.change}</span>
            </div>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Bar chart + Sources */}
      <div className="mid-row">
        <div className="glass-card chart-card">
          <h2 className="card-title">Monthly Traffic</h2>
          <div className="bar-chart">
            {BAR_DATA.map((d, i) => (
              <div
                key={d.month}
                className="bar-col"
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
                onClick={() => showToast(`${d.month}: ${d.value}k visits`)}
              >
                {hoveredBar === i && <div className="bar-tooltip">{d.value}k</div>}
                <div
                  className="bar-fill"
                  style={{ height: `${d.value}%`, background: hoveredBar === i ? '#60a5fa' : '#3b82f6' }}
                />
                <span className="bar-label">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Traffic Sources</h2>
          <div className="sources-list">
            {SOURCES.map(s => (
              <div key={s.label} className="source-item" onClick={() => showToast(`${s.label}: ${s.pct}%`)}>
                <div className="source-header">
                  <span>{s.label}</span>
                  <span style={{ color: s.color, fontWeight: 600 }}>{s.pct}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top pages table */}
      <div className="glass-card table-card">
        <h2 className="card-title" style={{ padding: '24px 24px 0' }}>Top Pages</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Page</th>
              <th>Views</th>
              <th>Unique</th>
              <th>Bounce</th>
              <th>Avg. Time</th>
            </tr>
          </thead>
          <tbody>
            {TOP_PAGES.map(r => (
              <tr key={r.page} onClick={() => showToast(`Stats for ${r.page}`)}>
                <td className="td-blue">{r.page}</td>
                <td>{r.views}</td>
                <td>{r.unique}</td>
                <td>{r.bounce}</td>
                <td>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}