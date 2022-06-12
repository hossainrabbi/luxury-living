import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Home from './components/pages/Home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
