import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store token and role in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Redirect based on the user's role
      if (data.role === "Student") {
        navigate("/student");
      } else if (data.role === "Teacher") {
        navigate("/teacher");
      } else if (data.role === "Admin") {
        navigate("/admin");
      } else {
        alert("Unknown role");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}
        <button
          type="submit"
          style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
