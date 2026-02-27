import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importing your components
// import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This renders your Login.jsx component */}
        <Route path="/" element={<Login />} />
        
        {/* This renders your Dashboard.jsx component
        <Route path="/dashboard" element={<Dashboard />} /> */}
        
        {/* Redirects anything else back to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;