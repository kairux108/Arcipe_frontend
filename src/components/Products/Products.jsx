import './Products.css';
import React, { useState } from 'react';

const ALL_PRODUCTS = [
  { id:1, name:'Starter Pack',   cat:'Plan',   price:'$9.99',  sales:320, status:'Active',   desc:'Perfect for individuals and small teams getting started.' },
  { id:2, name:'Pro Plan',       cat:'Plan',   price:'$29.00', sales:210, status:'Active',   desc:'Advanced features for growing teams and professionals.' },
  { id:3, name:'Enterprise',     cat:'Plan',   price:'$99.00', sales:87,  status:'Active',   desc:'Full-featured solution for large organizations.' },
  { id:4, name:'Add-on Bundle',  cat:'Add-on', price:'$14.99', sales:145, status:'Active',   desc:'Extra tools and integrations to extend your workflow.' },
  { id:5, name:'Analytics Plus', cat:'Add-on', price:'$19.99', sales:92,  status:'Active',   desc:'Advanced reporting and custom dashboards.' },
  { id:6, name:'Legacy Basic',   cat:'Plan',   price:'$4.99',  sales:0,   status:'Archived', desc:'Deprecated plan, no longer available for new signups.' },
];

const CAT_STYLE = {
  Plan:     { bg: 'rgba(59,130,246,0.12)',  text: '#60a5fa' },
  'Add-on': { bg: 'rgba(168,85,247,0.12)', text: '#c084fc' },
};

export default function Products({ showToast }) {
  const [filter, setFilter]       = useState('All');
  const [search, setSearch]       = useState('');
  const [showModal, setShowModal] = useState(false);

  const visible = ALL_PRODUCTS.filter(p =>
    (filter === 'All' || p.status === filter || p.cat === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">

      <div className="page-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">{ALL_PRODUCTS.filter(p => p.status === 'Active').length} active products</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>+ Add Product</button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {[
          { label: 'Total Products', value: ALL_PRODUCTS.length,                                     icon: '📦' },
          { label: 'Active',         value: ALL_PRODUCTS.filter(p => p.status === 'Active').length,   icon: '✅' },
          { label: 'Total Sales',    value: ALL_PRODUCTS.reduce((a, p) => a + p.sales, 0),            icon: '🛒' },
          { label: 'Archived',       value: ALL_PRODUCTS.filter(p => p.status === 'Archived').length, icon: '📁' },
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
          {['All', 'Plan', 'Add-on', 'Archived'].map(f => (
            <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="search-box">
          <span>🔍</span>
          <input placeholder="Search products…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Product cards */}
      <div className="products-grid">
        {visible.map(p => (
          <div
            key={p.id}
            className={`product-card glass-card ${p.status === 'Archived' ? 'archived' : ''}`}
            onClick={() => showToast(`Viewing "${p.name}"`)}
          >
            <div className="product-top">
              <span className="status-badge" style={
                p.status === 'Active'
                  ? { background: 'rgba(34,197,94,0.12)', color: '#4ade80' }
                  : { background: 'rgba(148,163,184,0.1)', color: '#94a3b8' }
              }>
                {p.status}
              </span>
              <span className="status-badge" style={{ background: CAT_STYLE[p.cat]?.bg, color: CAT_STYLE[p.cat]?.text }}>
                {p.cat}
              </span>
            </div>

            <h3 className="product-name">{p.name}</h3>
            <p className="product-desc">{p.desc}</p>

            <div className="product-meta">
              <div className="meta-row">
                <span className="meta-key">Price</span>
                <span className="product-price">{p.price}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Sales</span>
                <span>{p.sales}</span>
              </div>
            </div>

            <div className="card-actions">
              <button className="card-btn" onClick={e => { e.stopPropagation(); showToast(`Editing "${p.name}"`); }}>Edit</button>
              <button className="card-btn danger" onClick={e => { e.stopPropagation(); showToast(`"${p.name}" archived`); }}>Archive</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal glass-card" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">Add Product</h2>
            <div className="modal-field"><label>Product Name</label><input placeholder="e.g. Business Plan" /></div>
            <div className="modal-field">
              <label>Category</label>
              <select><option>Plan</option><option>Add-on</option></select>
            </div>
            <div className="modal-field"><label>Price</label><input placeholder="$0.00" /></div>
            <div className="modal-field">
              <label>Description</label>
              <textarea rows={3} placeholder="Brief product description…" />
            </div>
            <div className="modal-btns">
              <button className="btn-ghost" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => { setShowModal(false); showToast('Product added! ✓'); }}>Add</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}