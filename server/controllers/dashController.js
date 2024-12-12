// controllers/dashboardController.js

// Student Dashboard Handler
const studentDashboard = (req, res) => {
    res.json({ message: "Welcome to the Student Dashboard" });
  };
  
  // Teacher Dashboard Handler
  const teacherDashboard = (req, res) => {
    res.json({ message: "Welcome to the Teacher Dashboard" });
  };
  
  // Admin Dashboard Handler
  const adminDashboard = (req, res) => {
    res.json({ message: "Welcome to the Admin Dashboard" });
  };
  
  module.exports = {
    studentDashboard,
    teacherDashboard,
    adminDashboard,
  };
  