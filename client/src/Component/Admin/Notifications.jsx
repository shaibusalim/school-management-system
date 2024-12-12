import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Notification.css';

const Notification = () => {
  const [message, setMessage] = useState('');
  const [targetRole, setTargetRole] = useState('student'); 
  const [isRead, setIsRead] = useState(false);
  const [notifcations, setNotifications] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notificationData = {
      message,
      targetRole,
      isRead,
    };
    try{

      const response = await axios.post('http://localhost:5000/api/notifications', notificationData)
      alert(response.message);
    }catch(error){
      console.error(error);
      alert("Failed to create notificaitons");
    }

  }

  useEffect(()=> {
    const fetchAllNotifactions = async () => {
          try{
            const response = await axios.get('http://localhost:5000/api/notifications');
              setNotifications(response.data);
          }catch(error){
            console.error("Erorr fetching data", error);
          }
    }
    fetchAllNotifactions();
  }, []);

  return (
    <div className='notification-container'>
        <div className='notification-content'>
        <form onSubmit={handleSubmit} className='notification-form'>
          <h3>Add Notification</h3>

          <div className='not-msg'>
            <label>Message</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>

          <div className='notification-select'>
            <label>Target Role</label>
            <select value={targetRole} onChange={(e) => setTargetRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className='not-check'>
            <label>Status</label>
            <input 
              type="checkbox" 
              checked={isRead} 
              onChange={(e) => setIsRead(e.target.checked)} 
            />
            <span>{isRead ? "Read" : "Unread"}</span>
          </div>

          <button className='notification-button' type="submit">Send Notification</button>
       </form>
        </div>
        <div className='notification-list'>
              {
                notifcations.map((notifcation) => (
                  <div>
                        <div>{notifcation.message}</div>
                        <h3>{notifcation.targetRole}</h3>
                        <p>{notifcation.isRead}</p>
                  </div>
                  
                ))
              }
        </div>
    </div>
  );
};

export default Notification;
