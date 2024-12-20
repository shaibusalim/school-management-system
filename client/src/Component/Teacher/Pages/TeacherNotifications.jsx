import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Notification.css'

const TeacherNotifications = () => {
  const [targetRole, setTargetRole] = useState('teacher'); 
  const [isRead, setIsRead] = useState(false);
  const [notifications, setNotifications] = useState([])

  

  useEffect(() => {
    const fetchAllNotifications = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/api/notifications?role=${targetRole}`);
        setNotifications(response.data);
      }catch(error){
        console.error("Error fetching data", error);
      }
    }
    fetchAllNotifications();
  }, [targetRole]);

  return (
    <div className='notification-container'>
      <h3>Notifications</h3>
      
      <div className='notification-list'>
        {notifications.map((notification) => (
          <div key={notification.id} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
            <div className='notification-message'>{notification.message}</div>
            <div className='notification-role'>{notification.targetRole}</div>
            <div className='notification-status'>{notification.isRead ? 'Read' : 'Unread'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherNotifications;
