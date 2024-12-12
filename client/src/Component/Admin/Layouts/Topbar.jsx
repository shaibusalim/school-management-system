import React, { useState } from 'react';
import '../../css/Topbar.css';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="topbar">
      <div className="search">
        <input placeholder="Search..." type="text" />
        <i className="fas fa-search"></i>
      </div>
      <div className='icons menu'>
        <div className="icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-envelope"></i>
          
        </div>
        <div className="profile">
          <img 
            alt="Profile" 
            height="40" 
            src="https://storage.googleapis.com/a1aa/image/H64GenU4gjVeQ07CkKJRcYEiIo50RpWg45OCle9gNJfUbIaPB.jpg" 
            width="40" 
          />
          <span>Admin</span>
          
          {/* Dropdown icon */}
          <i className="fas fa-caret-down" onClick={toggleDropdown}></i>

          {/* Dropdown menu */}
          {isDropdownOpen && (
           
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
        </div>
      </div>
    </div>
  );
};

export default Topbar;
