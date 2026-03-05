import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importing your components from their respective folders
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/projects'; // Ensure file is Projects.jsx
// import Team from './components/Team/Team';             // Create this folder/file next
// import Settings from './components/Settings/Settings'; // Create this folder/file next

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Login Route: The entry point of your app */}
        <Route path="/" element={<Login />} />
        
        {/* 2. Dashboard Route: The main landing page after login */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* 3. Projects Route: Make sure Projects.jsx is renamed from projects.jsx */}
        <Route path="/projects" element={<Projects />} />
        
        {/* 4. Team Route
        <Route path="/team" element={<Team />} />
        
        // {/* 5. Settings Route */}
        {/* // <Route path="/settings" element={<Settings />} /> */} 
        
        {/* 6. Catch-all: Redirects any unknown URL back to Login or Dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;