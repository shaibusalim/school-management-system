import React, { useState } from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };



  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-btn" onClick={toggleSidebar}>
        <i className={`fas fa-${isCollapsed ? "angle-right" : "angle-left"}`}></i>
      </button>
      <h2 className="sidebar-title">{!isCollapsed && "Adminity"}</h2>
      <ul>
        <Link to="/teacher" className="link">
          <i className="fas fa-cube"></i>
          {!isCollapsed && <span>Dashboard</span>}
        </Link>


        {/* Sidebar Links */}
        <Link to="/teacher/exams" className="link">
          <i className="fas fa-clipboard-check"></i>
          {!isCollapsed && <span>Exams</span>}
        </Link>
        <Link to="/teacher/notifications" className="link">
          <i className="fas fa-magic"></i>
          {!isCollapsed && <span>Notification</span>}
        </Link>
        <Link to="/teacher/subjects" className="link">
          <i className="fas fa-layer-group"></i>
          {!isCollapsed && <span>Subjects</span>}
        </Link>
        <Link to="/teacher/events" className="link">
          <i className="fas fa-calendar"></i>
          {!isCollapsed && <span>Events</span>}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
