import './Orders.css';
import React, { useState } from 'react';

const ALL_ORDERS = [
  { id: '#ORD-4821', customer: 'Alex Morgan',   product: 'Pro Plan',      date: 'Mar 4, 2026',  amount: '$29.00', status: 'Pending'   },
  { id: '#ORD-4820', customer: 'Jamie Rivera',  product: 'Enterprise',    date: 'Mar 4, 2026',  amount: '$99.00', status: 'Shipped'   },
  { id: '#ORD-4819', customer: 'Sam Chen',      product: 'Starter Pack',  date: 'Mar 3, 2026',  amount: '$9.99',  status: 'Delivered' },
  { id: '#ORD-4818', customer: 'Dana Kim',      product: 'Pro Plan',      date: 'Mar 3, 2026',  amount: '$29.00', status: 'Cancelled' },
  { id: '#ORD-4817', customer: 'Riley Park',    product: 'Add-on Bundle', date: 'Mar 2, 2026',  amount: '$14.99', status: 'Delivered' },
  { id: '#ORD-4816', customer: 'Jordan Lee',    product: 'Enterprise',    date: 'Mar 2, 2026',  amount: '$99.00', status: 'Shipped'   },
  { id: '#ORD-4815', customer: 'Casey Wright',  product: 'Starter Pack',  date: 'Mar 1, 2026',  amount: '$9.99',  status: 'Delivered' },
  { id: '#ORD-4814', customer: 'Taylor Brooks', product: 'Pro Plan',      date: 'Feb 28, 2026', amount: '$29.00', status: 'Pending'   },
];

const STATUS_STYLE = {
  Pending:   { bg: 'rgba(251,146,60,0.12)',  text: '#fb923c' },
  Shipped:   { bg: 'rgba(59,130,246,0.12)',  text: '#60a5fa' },
  Delivered: { bg: 'rgba(34,197,94,0.12)',   text: '#4ade80' },
  Cancelled: { bg: 'rgba(239,68,68,0.12)',   text: '#f87171' },
};

export default function Orders({ showToast }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const visible = ALL_ORDERS.filter(o =>
    (filter === 'All' || o.status === filter) &&
    (o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search))
  );

  return (
    <div className="page-content">

      <div className="page-header">
        <div>
          <h1 className="page-title">Orders</h1>
          <p className="page-subtitle">
            {ALL_ORDERS.length} total &middot; {ALL_ORDERS.filter(o => o.status === 'Pending').length} pending
          </p>
        </div>
        <button className="btn-primary" onClick={() => showToast('New order form opened')}>
          + New Order
        </button>
      </div>

      {/* Summary */}
      <div className="stats-grid">
        {[
          { label: 'Total Orders', value: ALL_ORDERS.length,                                    icon: '🛒' },
          { label: 'Revenue',      value: '$320.96',                                             icon: '💰' },
          { label: 'Delivered',    value: ALL_ORDERS.filter(o => o.status === 'Delivered').length, icon: '✅' },
          { label: 'Cancelled',    value: ALL_ORDERS.filter(o => o.status === 'Cancelled').length, icon: '❌' },
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
          {['All', 'Pending', 'Shipped', 'Delivered', 'Cancelled'].map(f => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="search-box">
          <span>🔍</span>
          <input
            placeholder="Search by name or order ID…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="glass-card table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map(o => {
              const s = STATUS_STYLE[o.status];
              return (
                <tr key={o.id} onClick={() => showToast(`Viewing ${o.id}`)}>
                  <td className="td-blue">{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.product}</td>
                  <td className="td-muted">{o.date}</td>
                  <td className="td-amount">{o.amount}</td>
                  <td>
                    <span className="status-badge" style={{ background: s.bg, color: s.text }}>
                      {o.status}
                    </span>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button className="icon-action" onClick={e => { e.stopPropagation(); showToast(`Viewing ${o.id}`); }}>👁</button>
                      <button className="icon-action" onClick={e => { e.stopPropagation(); showToast(`Editing ${o.id}`); }}>✏️</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {visible.length === 0 && <p className="empty-state">No orders match your filters.</p>}
      </div>

    </div>
  );
}