import React from "react";
import { Link } from "react-router-dom";    
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";              
import { useAuth } from "../context/AuthContext";       
import { useNavigate } from "react-router-dom";

function Home() {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    React.useEffect(() => {
        if (user) {
        navigate("/dashboard");
        }
    }, [user, navigate]);
    
    return (
        <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <div className="flex-grow flex items-center justify-center bg-gray-100">
            <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
            <p className="mb-6">Please sign up or sign in to continue.</p>
            <Link to="/signup" className="btn btn-primary mr-4">Sign Up</Link>
            <Link to="/signin" className="btn btn-secondary">Sign In</Link>
            </div>
        </div>
        {/* <Footer /> */}
        </div>
    );
    }
export default Home;