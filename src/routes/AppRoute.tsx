import { Routes, Route, Navigate } from "react-router-dom";
import BusinessPromoters from "../pages/businessPromoters/BsinessPromoters";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<BusinessPromoters />} />
      <Route path="/dashboard" element={<h2>Dashboard</h2>} />
      <Route path="/business-partners" element={<h2>Business Partners</h2>} />
      <Route path="/new-requests" element={<h2>New Requests</h2>} />
      <Route path="/invoice" element={<h2>Invoice</h2>} />
      <Route path="/renewal" element={<h2>Renewal</h2>} />
    </Routes>
  );
}
