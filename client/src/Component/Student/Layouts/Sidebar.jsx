import React from "react";
import "../../css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({toggleSidebar, isCollapsed}) => {

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-btn" onClick={toggleSidebar}>
        <i className={`fas fa-${isCollapsed ? "angle-right" : "angle-left"}`}></i>
      </button>
      <h2 className="sidebar-title">{!isCollapsed && "Adminity"}</h2>
      <ul className="sidebar-ul">
        <Link to="/student" className="link">
          <i className="fas fa-cube"></i>
          {!isCollapsed && <span>Dashboard</span>}
        </Link>

        {/* Sidebar Links */}
        <Link to="/student/attendance" className="link">
          <i className="fas fa-clipboard-check"></i>
          {!isCollapsed && <span>Attendance</span>}
        </Link>
        <Link to="/student/notification" className="link">
          <i className="fas fa-magic"></i>
          {!isCollapsed && <span>Notification</span>}
        </Link>
        <Link to="/student/results" className="link">
          <i className="fas fa-layer-group"></i>
          {!isCollapsed && <span>Results</span>}
        </Link>
        <Link to="/student/events" className="link">
          <i className="fas fa-calendar"></i>
          {!isCollapsed && <span>Events</span>}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
