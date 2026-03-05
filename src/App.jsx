import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login     from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login — entry point */}
        <Route path="/" element={<Login />} />

        {/* Dashboard — handles all internal navigation via its own sidebar
            (Dashboard, Analytics, Orders, Users, Products, Settings) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch-all — redirect unknown URLs back to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;