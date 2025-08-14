import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">My App</Link>
        <button
          className="md:hidden block"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            // Cross icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="absolute right-0 mt-2 mx-4 bg-gray-800 rounded shadow-lg flex flex-col space-y-2 z-50 p-4 md:hidden">
          <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
          <Link to="/signin" onClick={() => setOpen(false)}>Sign In</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;