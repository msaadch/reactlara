import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Footer() {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      <div className="mt-2">
        <Link to="/signup" className="text-white hover:underline">Sign Up</Link> | 
        <Link to="/signin" className="text-white hover:underline ml-2">Sign In</Link>
      </div>
    </footer>
  );
}   

export default Footer;