import React, { useState, useEffect } from 'react';
import "../../css/Topbar.css";

const Topbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [targetRole, setTargetRole] = useState('Teacher'); 

  // Fetch notifications from the backend
  const fetchNotifications = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/notifications?role=${targetRole}`); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNotifications(data);
      setNotificationCount(data.length);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 10000); 
    return () => clearInterval(interval);
  }, [targetRole]); 

  // Toggle function for dropdowns
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="topbar">
      <div className="search">
        <input placeholder="Search..." type="text" />
        <i className="fas fa-search"></i>
      </div>
      <div className='icons menu'>
        <div className="icons">
          <div className="notification-icon" onClick={() => toggleDropdown('notifications')}>
            <i className="fas fa-bell"></i>
            {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
          </div>
          <i className="fas fa-envelope"></i>
        </div>
        <div className="profile">
          <img 
            alt="Profile" 
            height="40" 
            src="https://storage.googleapis.com/a1aa/image/H64GenU4gjVeQ07CkKJRcYEiIo50RpWg45OCle9gNJfUbIaPB.jpg" 
            width="40" 
          />
          <span>Teacher</span>
          
          {/* Dropdown icon */}
          <i className="fas fa-caret-down" onClick={() => toggleDropdown('userProfile')}></i>

          {/* User Profile Dropdown menu */}
          {openDropdown === 'userProfile' && (
            <ul className="dropdown-menu">
              <li>
                <i className="fas fa-cogs"></i> Settings
              </li>
              <li>
                <i className="fas fa-user"></i> Profile
              </li>
              <li>
                <i className="fas fa-sign-out-alt"></i> Logout
              </li>
            </ul>
          )}

          {/* Notification dropdown */}
          {openDropdown === 'notifications' && (
            <div className={`notification-dropdown ${openDropdown === 'notifications' ? 'show' : ''}`}>
              <ul>
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <li key={index}>{notification.message}</li> // Assuming notification has a 'message' property
                  ))
                ) : (
                  <li>No notifications</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;