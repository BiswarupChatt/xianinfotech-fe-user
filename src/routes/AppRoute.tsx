import { Routes, Route } from "react-router-dom";
import UsersList from "../pages/user-list/UsersList";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/user-list" element={<UsersList />} />
      <Route path="/trnsaction-list" element={<h2>Transaction List</h2>} />
      <Route path="/video-management" element={<h2>Video Management</h2>} />
      <Route path="/top-receivers-list" element={<h2>Top Recievers List</h2>} />
    </Routes>
  );
}
