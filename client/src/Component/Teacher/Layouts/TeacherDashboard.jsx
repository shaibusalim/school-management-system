import { useState, useEffect } from 'react';
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../../css/DashboardLayout.css';
import '@fortawesome/fontawesome-free/css/all.min.css';





const TeacheDashboard = ({children}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsCollapsed(true); // Automatically collapse the sidebar
    } else {
      setIsCollapsed(false); // Expand the sidebar for larger screens
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct state
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="dashboard">
      <div >
      <Sidebar toggleSidebar = {toggleSidebar} isCollapsed={isCollapsed}/>
      </div>
    
      <div className={`main-content ${isCollapsed ? 'collapsed' : 'expand'}`}>
            <Topbar />
            <div className='dash-layer-container'>
            {children}
            </div>
      </div>
    </div>
  );
}

export default TeacheDashboard;
