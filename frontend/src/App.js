import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddServices from './components/admin/AddServices/AddServices';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Home from './components/pages/Home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/add-services" element={<AddServices />} />
    </Routes>
  );
}
