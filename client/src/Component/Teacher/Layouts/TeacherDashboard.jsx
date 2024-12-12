import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import '@fortawesome/fontawesome-free/css/all.min.css';


const TeacheDashboard = ({children}) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
      <Topbar />

      <div className='dash-layer-container'>
       {children}
      </div>
        
      </div>
    </div>
  );
}

export default TeacheDashboard;
