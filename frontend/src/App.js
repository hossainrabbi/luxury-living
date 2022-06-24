import { Route, Routes } from 'react-router-dom';
import AddServices from './components/admin/AddServices/AddServices';
import Dashboard from './components/admin/Dashboard/Dashboard';
import ManageService from './components/admin/ManageService/ManageService';
import OrderList from './components/admin/OrderList/OrderList';
import UpdateService from './components/admin/UpdateService/UpdateService';
import UserList from './components/admin/UserList/UserList';
import Home from './components/pages/Home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/add-services" element={<AddServices />} />
      <Route path="/admin/order-list" element={<OrderList />} />
      <Route path="/admin/user-list" element={<UserList />} />
      <Route path="/admin/manage-services" element={<ManageService />} />
      <Route path="/admin/manage-services/:id" element={<UpdateService />} />
    </Routes>
  );
}
