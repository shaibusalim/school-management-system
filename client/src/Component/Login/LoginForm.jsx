import { useState} from 'react';
import React from 'react';
import './LoginForm.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import loginImage from '../../assets/images/login.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const LoginForm = ({ onClose }) => {

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
        localStorage.setItem("userId", data.id)
  
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
    <div className="login-form-overlay">
      <div className="login-form-container">
        <div className="login-form-image">
          <img src={loginImage} alt="Login" width={400} height={400} />
        </div>
        <div className="login-form-content">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
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
            <button type="submit">Login</button>
            <div className="close-icon" onClick={onClose}>
            <i className="fas fa-times" style={{fontSize: '28px', color: 'red'}}></i> {/* Close icon */}
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;