// components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <NavLink to="/" className="text-blue-600">Home</NavLink>
      <NavLink to="/contact" className="text-blue-600">Contact</NavLink>
      <NavLink to="/settings" className="text-blue-600">Settings</NavLink>
    </nav>
  );
}
