import React, { useState } from "react";
import api from "../api";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.get("/sanctum/csrf-cookie");
      const res = await api.post("/login", form);
      setMessage(res.data.message || "Login successful!");
    } catch (err) {
      setMessage("Error: " + err.response?.data?.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" className="w-full border p-2 mb-4" onChange={handleChange}/>
        <input name="password" type="password" placeholder="Password" className="w-full border p-2 mb-4" onChange={handleChange}/>
        <button className="w-full bg-blue-600 text-white py-2">Login</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default SignIn;