import React, { useState } from "react";
import "../../css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({toggleSidebar, isCollapsed}) => {

  const [isDefaultOpen, setIsDefaultOpen] = useState(false);
  const [isCrmOpen, setIsCrmOpen] = useState(false);

 

  const toggleDefaultMenu = () => setIsDefaultOpen(!isDefaultOpen);
  const toggleCrmMenu = () => setIsCrmOpen(!isCrmOpen);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-btn" onClick={toggleSidebar}>
        <i className={`fas fa-${isCollapsed ? "angle-right" : "angle-left"}`}></i>
      </button>
      <h2 className="sidebar-title">{!isCollapsed && "Adminity"}</h2>
      <ul className="sidebar-ul">
        <Link to="/admin" className="link">
          <i className="fas fa-cube"></i>
          {!isCollapsed && <span>Dashboard</span>}
        </Link>

        {/* Default Dropdown */}
        <li onClick={toggleDefaultMenu} className="dropdown-item">
          <i className="fas fa-th-large"></i>
          {!isCollapsed && <span>Students</span>}
          {!isCollapsed && (
            <i className={`fas fa-chevron-${isDefaultOpen ? "up" : "down"}`}></i>
          )}
        </li>
        {!isCollapsed && isDefaultOpen && (
          <ul className="dropdown">
             <Link to="/admin/students/register" className="link1">
              <li>Register Students</li>
            </Link>
            <Link to="/admin/students/list" className="link1">
              <li>List Students</li>
            </Link>
          </ul>
        )}

        {/* CRM Dropdown */}
        <li onClick={toggleCrmMenu} className="dropdown-item">
          <i className="fas fa-users"></i>
          {!isCollapsed && <span>Teachers</span>}
          {!isCollapsed && (
            <i className={`fas fa-chevron-${isCrmOpen ? "up" : "down"}`}></i>
          )}
        </li>
        {!isCollapsed && isCrmOpen && (
          <ul className="dropdown">
             <Link to="/admin/teachers/register" className="link1">
              <li>Register Teachers</li>
            </Link>
            <Link to="/admin/teachers/list" className="link1">
              <li>List Teachers</li>
            </Link>
          </ul>
        )}

        {/* Sidebar Links */}
        <Link to="/admin/attendance" className="link">
          <i className="fas fa-clipboard-check"></i>
          {!isCollapsed && <span>Attendance</span>}
        </Link>
        <Link to="/admin/notification" className="link">
          <i className="fas fa-magic"></i>
          {!isCollapsed && <span>Notification</span>}
        </Link>
        <Link to="/admin/results" className="link">
          <i className="fas fa-layer-group"></i>
          {!isCollapsed && <span>Results</span>}
        </Link>
        <Link to="/admin/events" className="link">
          <i className="fas fa-calendar"></i>
          {!isCollapsed && <span>Events</span>}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
